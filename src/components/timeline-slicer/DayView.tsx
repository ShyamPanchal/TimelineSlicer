import React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender, monthNames } from "./utils";

export function DayView(props: {
  calender: Calender;
  sliderMax: number;
  startDate?: Date;
  endDate?: Date;
}) {
  const ref: any = React.useRef(null);
  const [rangeWidth, setRangeWidth] = React.useState<number>(0);
  React.useEffect(() => {
    // console.log("width", ref.current ? ref.current.offsetWidth : 0);
    if (ref.current) {
      setRangeWidth(ref.current.offsetWidth);
    }
  }, [ref.current]);

  let days = Object.values(props.calender.years)
    .map((year) =>
      Object.values(year.quaters).map((quater) =>
        Object.values(quater.months).map((month) =>
          Object.entries(month.days).map(([day, date]) => ({
            day,
            date,
          }))
        )
      )
    )
    .flat()
    .flat()
    .flat();

  const [startDate, setStartDate] = React.useState<Date>(
    props.startDate ? props.startDate : props.calender.startDate
  );
  const [endDate, setEndDate] = React.useState<Date>(
    props.endDate ? props.endDate : props.calender.endDate
  );

  const updateStartIndex = (index: number) => {
    const day = days[index - 1];
    setStartDate(day.date);
  };

  const updateEndIndex = (index: number) => {
    const day = days[index - 2];
    setEndDate(day.date);
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
    <div style={{ position: "relative" }}>
      <InputUI
        sliderMin={1}
        sliderMax={props.sliderMax}
        width={rangeWidth}
        setStartIndex={updateStartIndex}
        setEndIndex={updateEndIndex}
        // endValue={13}
      />
      <div className="ui-container" ref={ref}>
        {Object.entries(props.calender.years).map(([year, quaters]) =>
          Object.entries(quaters.quaters).map(([quater, months]) =>
            Object.entries(months.months).map(([month, days]) => (
              <Panel
                key={year + "-" + quater + "-" + month}
                className="flex-box"
                style={{
                  flex: Object.values(days.days).length,
                  minWidth: "75px",
                }}
                shaded
                bordered
                bodyFill
              >
                {year} - {monthNames[parseInt(month)]}
                <div className="sub-container">
                  {Object.entries(days.days).map(([day, date]) => {
                    const selected = startDate <= date && endDate >= date;
                    return (
                      <Panel
                        key={day}
                        className="year-box flex-box"
                        style={{
                          minWidth: "50px",
                          backgroundColor: selected ? "#c8c8c8" : "transparent",
                        }}
                        shaded
                        bordered
                        bodyFill
                      >
                        {day}
                      </Panel>
                    );
                  })}
                </div>
              </Panel>
            ))
          )
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
