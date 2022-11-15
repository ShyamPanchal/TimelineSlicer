import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender } from "./utils";

export function QuaterView(props: {
  calender: Calender;
  sliderMax: number;
  startDate?: Date;
  endDate?: Date;
}) {
  const ref: any = React.useRef(null);
  const [rangeWidth, setRangeWidth] = React.useState<number>(0);
  React.useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    if (ref.current) {
      setRangeWidth(ref.current.offsetWidth);
    }
  }, [ref.current]);

  let quaters = Object.values(props.calender.years)
    .map((year) =>
      Object.entries(year.quaters).map(([quater, quaterData]) => ({
        quater,
        ...quaterData,
      }))
    )
    .flat();

  const [startDate, setStartDate] = React.useState<Date>(
    props.startDate ? props.startDate : props.calender.startDate
  );
  const [endDate, setEndDate] = React.useState<Date>(
    props.endDate ? props.endDate : props.calender.endDate
  );

  const updateStartIndex = (index: number) => {
    const selectedQuater = quaters[index - 1];
    setStartDate(selectedQuater.startDate);
  };

  const updateEndIndex = (index: number) => {
    const selectedQuater = quaters[index - 2];
    setEndDate(selectedQuater.endDate);
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
        {Object.entries(props.calender.years).map(([year, quaters]) => (
          <Panel
            key={year}
            className="flex-box"
            style={{
              flex: Object.values(quaters.quaters).length,
              minWidth: "75px",
            }}
            shaded
            bordered
            bodyFill
          >
            {year}
            <div className="sub-container">
              {Object.entries(quaters.quaters).map(([quater, _quaterData]) => {
                const selected =
                  startDate <= _quaterData.endDate &&
                  endDate >= _quaterData.startDate;
                return (
                  <Panel
                    key={quater}
                    className="year-box flex-box"
                    shaded
                    bordered
                    bodyFill
                    style={{
                      minWidth: "50px",
                      backgroundColor: selected ? "#c8c8c8" : "transparent",
                    }}
                  >
                    Q{quater}
                  </Panel>
                );
              })}
            </div>
          </Panel>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
