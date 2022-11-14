import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender } from "./utils";

export function YearView(props: { calender: Calender; sliderMax: number }) {
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
      <div className="ui-container" ref={ref}>
        {Object.keys(props.calender.years).map((year) => (
          <Panel
            key={year}
            className="year-box flex-box"
            shaded
            bordered
            bodyFill
          >
            {year}
          </Panel>
        ))}
      </div>
    </div>
  );
}
