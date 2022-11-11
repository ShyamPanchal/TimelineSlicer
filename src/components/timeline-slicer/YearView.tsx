import { Panel } from "rsuite";
import { Calender } from "./utils";

export function YearView(props: { calender: Calender }) {
  return (
    <div className="ui-container">
      {Object.keys(props.calender).map((year) => (
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
  );
}
