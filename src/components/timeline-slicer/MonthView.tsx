import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender, monthNames } from "./utils";

export function MonthView(props: {
  calender: Calender;
  sliderMax: number;
  startDate: Date;
  endDate: Date;
  updateStartDate?: (start: Date) => void;
  updateEndDate?: (end: Date) => void;
}) {
  const ref: any = React.useRef(null);
  const [rangeWidth, setRangeWidth] = React.useState<number>(0);
  React.useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    if (ref.current) {
      setRangeWidth(ref.current.offsetWidth);
    }
  }, [ref.current]);

  let months = Object.values(props.calender.years)
    .map((year) =>
      Object.values(year.quaters).map((quater) =>
        Object.entries(quater.months).map(([month, monthData]) => ({
          month,
          ...monthData,
        }))
      )
    )
    .flat()
    .flat();

  const updateStartIndex = (index: number) => {
    const month = months[index - 1];
    if (props.updateStartDate) {
      props.updateStartDate(month.startDate);
    }
  };

  const updateEndIndex = (index: number) => {
    const month = months[index - 2];
    if (props.updateEndDate) {
      props.updateEndDate(month.endDate);
    }
  };

  const bottomRef: any = React.useRef(null);

  React.useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({
      behavior: "auto",
      // behavior: "smooth"
    });
  }, [bottomRef.current]);

  return (
    <div style={{ position: "relative", overflowY: "hidden" }}>
      <InputUI
        sliderMin={1}
        sliderMax={props.sliderMax}
        width={rangeWidth}
        setStartIndex={updateStartIndex}
        setEndIndex={updateEndIndex}
      />
      <div className="ui-container" ref={ref}>
        {Object.entries(props.calender.years).map(([year, quaters]) =>
          Object.entries(quaters.quaters).map(([quater, months]) => (
            <Panel
              key={year + "-" + quater}
              className="flex-box"
              style={{
                flex: Object.values(months.months).length,
                minWidth: "75px",
              }}
              shaded
              bordered
              bodyFill
            >
              {year} - Q{quater}
              <div className="sub-container">
                {Object.entries(months.months).map(([month, _monthData]) => {
                  const selected =
                    props.startDate <= _monthData.endDate &&
                    props.endDate >= _monthData.startDate;
                  return (
                    <Panel
                      key={month}
                      className="year-box flex-box"
                      style={{
                        minWidth: "50px",
                        backgroundColor: selected ? "#c8c8c8" : "transparent",
                      }}
                      shaded
                      bordered
                      bodyFill
                    >
                      {monthNames[parseInt(month)]}
                    </Panel>
                  );
                })}
              </div>
            </Panel>
          ))
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
