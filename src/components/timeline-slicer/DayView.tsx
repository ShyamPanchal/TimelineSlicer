import React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender, monthNames } from "./utils";

export function DayView(props: { calender: Calender; sliderMax: number }) {
  // const ref: any = React.useRef(null);
  // const [rangeWidth, setRangeWidth] = React.useState<number>(0);
  // React.useEffect(() => {
  //   console.log("width", ref.current ? ref.current.offsetWidth : 0);
  //   if (ref.current) {
  //     setRangeWidth(ref.current.offsetWidth);
  //   }
  // }, [ref.current]);
  // console.log("rangeWidth", rangeWidth);
  // return (
  //   <div style={{ position: "relative" }}>
  //     <InputUI
  //       sliderMin={1}
  //       sliderMax={props.sliderMax}
  //       width={rangeWidth}
  //       endValue={13}
  //     />
  //     <div className="ui-container" ref={ref}>
  //       {Object.entries(props.calender).map(([year, quaters]) =>
  //         Object.entries(quaters).map(([quater, months]) =>
  //           Object.entries(months).map(([month, days]) => (
  //             <Panel
  //               key={year + "-" + quater + "-" + month}
  //               className="flex-box"
  //               style={{
  //                 flex: Object.values(days).length,
  //                 minWidth: "75px",
  //               }}
  //               shaded
  //               bordered
  //               bodyFill
  //             >
  //               {year} - {monthNames[parseInt(month)]}
  //               <div className="sub-container">
  //                 {Object.keys(days).map((day) => {
  //                   return (
  //                     <Panel
  //                       key={day}
  //                       className="year-box flex-box"
  //                       style={{ minWidth: "50px" }}
  //                       shaded
  //                       bordered
  //                       bodyFill
  //                     >
  //                       {day}
  //                     </Panel>
  //                   );
  //                 })}
  //               </div>
  //             </Panel>
  //           ))
  //         )
  //       )}
  //     </div>
  //   </div>
  // );
  return <></>;
}
