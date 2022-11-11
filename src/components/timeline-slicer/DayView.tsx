import { Panel } from "rsuite";
import { Calender, monthNames } from "./utils";

export function DayView(props: { calender: Calender }) {
  return (
    <div className="ui-container">
      {Object.entries(props.calender).map(([year, quaters]) =>
        Object.entries(quaters).map(([quater, months]) =>
          Object.entries(months).map(([month, days]) => (
            <Panel
              key={year + "-" + quater + "-" + month}
              className="flex-box"
              style={{
                flex: Object.values(days).length,
                minWidth: "75px",
              }}
              shaded
              bordered
              bodyFill
            >
              {year} - {monthNames[parseInt(month)]}
              <div className="sub-container">
                {Object.keys(days).map((day) => {
                  return (
                    <Panel
                      key={day}
                      className="year-box flex-box"
                      style={{ minWidth: "50px" }}
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
    </div>
  );
}
