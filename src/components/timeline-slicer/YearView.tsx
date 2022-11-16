import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender } from "./utils";

export function YearView(props: {
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
  }, []);
  // }, [ref.current]);

  const updateStartIndex = (index: number) => {
    const selectedYear = Object.keys(props.calender.years)[index - 1];
    const year = props.calender.years[selectedYear];
    if (props.updateStartDate) {
      props.updateStartDate(year.startDate);
    }
  };

  const updateEndIndex = (index: number) => {
    const selectedYear = Object.keys(props.calender.years)[index - 2];
    const year = props.calender.years[selectedYear];
    if (props.updateEndDate) {
      props.updateEndDate(year.endDate);
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
        {Object.entries(props.calender.years).map(([year, _yearData]) => {
          const selected =
            props.startDate <= _yearData.endDate &&
            props.endDate >= _yearData.startDate;
          return (
            <Panel
              key={year}
              className="year-box flex-box"
              shaded
              bordered
              bodyFill
              style={{
                backgroundColor: selected ? "#c8c8c8" : "transparent",
              }}
            >
              {year}
            </Panel>
          );
        })}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
