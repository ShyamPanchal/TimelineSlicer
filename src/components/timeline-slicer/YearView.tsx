import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender } from "./utils";

export function YearView(props: {
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

  const [startDate, setStartDate] = React.useState<Date>(
    props.startDate ? props.startDate : props.calender.startDate
  );
  const [endDate, setEndDate] = React.useState<Date>(
    props.endDate ? props.endDate : props.calender.endDate
  );

  const updateStartIndex = (index: number) => {
    const selectedYear = Object.keys(props.calender.years)[index - 1];
    const year = props.calender.years[selectedYear];
    setStartDate(year.startDate);
  };

  const updateEndIndex = (index: number) => {
    const selectedYear = Object.keys(props.calender.years)[index - 2];
    const year = props.calender.years[selectedYear];
    setEndDate(year.endDate);
  };

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
        {Object.entries(props.calender.years).map(([year, _yearData]) => {
          const selected =
            startDate <= _yearData.endDate && endDate >= _yearData.startDate;
          return (
            <Panel
              key={year}
              className="year-box flex-box"
              shaded
              bordered
              bodyFill
              style={{ backgroundColor: selected ? "#c8c8c8" : "transparent" }}
            >
              {year}
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
