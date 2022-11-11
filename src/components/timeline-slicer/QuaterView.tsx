import { Panel } from "rsuite";
import { Calender } from "./utils";

export function QuaterView(props: { calender: Calender }) {
  return (
    <div className="ui-container">
      {Object.entries(props.calender).map(([year, quaters]) => (
        <Panel
          key={year}
          className="flex-box"
          style={{ flex: Object.values(quaters).length, padding: "0px" }}
          shaded
          bordered
          bodyFill
        >
          {year}
          <div className="ui-container">
            {Object.keys(quaters).map((quater) => {
              return (
                <Panel
                  key={quater}
                  className="year-box flex-box"
                  shaded
                  bordered
                  bodyFill
                >
                  {quater}
                </Panel>
              );
            })}
          </div>
        </Panel>
      ))}
    </div>
  );
}
