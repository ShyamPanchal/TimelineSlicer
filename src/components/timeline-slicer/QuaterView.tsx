import * as React from "react";
import { Panel } from "rsuite";
import { InputUI } from "./InputUI";
import { Calender } from "./utils";

export function QuaterView(props: { calender: Calender; sliderMax: number }) {
  // const ref: any = React.useRef(null);
  // const [rangeWidth, setRangeWidth] = React.useState<number>(0);
  // React.useEffect(() => {
  //   console.log("width", ref.current ? ref.current.offsetWidth : 0);
  //   if (ref.current) {
  //     setRangeWidth(ref.current.offsetWidth);
  //   }
  // }, [ref.current]);
  // return (
  //   <div style={{ position: "relative", overflowY: "hidden" }}>
  //     <InputUI sliderMin={1} sliderMax={props.sliderMax} width={rangeWidth} />
  //     <div className="ui-container" ref={ref}>
  //       {Object.entries(props.calender).map(([year, quaters]) => (
  //         <Panel
  //           key={year}
  //           className="flex-box"
  //           style={{ flex: Object.values(quaters).length, minWidth: "75px" }}
  //           shaded
  //           bordered
  //           bodyFill
  //         >
  //           {year}
  //           <div className="sub-container">
  //             {Object.keys(quaters).map((quater) => {
  //               return (
  //                 <Panel
  //                   key={quater}
  //                   className="year-box flex-box"
  //                   style={{ minWidth: "50px" }}
  //                   shaded
  //                   bordered
  //                   bodyFill
  //                 >
  //                   {quater}
  //                 </Panel>
  //               );
  //             })}
  //           </div>
  //         </Panel>
  //       ))}
  //     </div>
  //   </div>
  // );
  return <></>;
}
