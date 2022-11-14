import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender, monthNames } from "./utils";

export function MonthView(props: { calender: Calender; sliderMax: number }) {
  const ref: any = React.useRef(null);
  const [rangeWidth, setRangeWidth] = React.useState<number>(0);
  React.useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    if (ref.current) {
      setRangeWidth(ref.current.offsetWidth);
    }
  }, [ref.current]);
  return (
    <div style={{ position: "relative", overflowY: "hidden" }}>
      <InputUI sliderMin={1} sliderMax={props.sliderMax} width={rangeWidth} />
      <div className="ui-container">
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
                {Object.keys(months.months).map((month) => {
                  return (
                    <Panel
                      key={month}
                      className="year-box flex-box"
                      style={{ minWidth: "50px" }}
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
      </div>
    </div>
  );
}
