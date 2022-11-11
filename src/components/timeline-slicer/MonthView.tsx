import { Panel } from "rsuite";
import { Calender, monthNames } from "./utils";

export function MonthView(props: { calender: Calender }) {
  return (
    <div className="ui-container">
      {Object.entries(props.calender).map(([year, quaters]) =>
        Object.entries(quaters).map(([quater, months]) => (
          <Panel
            key={year + "-" + quater}
            className="flex-box"
            style={{
              flex: Object.values(months).length,
              minWidth: "75px",
            }}
            shaded
            bordered
            bodyFill
          >
            {year} - Q{quater}
            <div className="sub-container">
              {Object.keys(months).map((month) => {
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
  );
}
