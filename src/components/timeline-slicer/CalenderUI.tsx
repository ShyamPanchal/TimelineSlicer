import { Calender } from "./utils";

function CalenderUI(props: { calender: Calender }) {
  // const ui = Object.entries(props.calender).map(([year, quaters]) => {
  //   return (
  //     <div
  //       style={{
  //         border: "1px solid black",
  //         marginBottom: "10px",
  //         padding: "10px",
  //       }}
  //       key={year}
  //     >
  //       <h3>Year {year}</h3>
  //       {Object.entries(quaters).map(([quater, months]) => {
  //         return (
  //           <div
  //             style={{
  //               border: "1px solid black",
  //               marginBottom: "10px",
  //               padding: "10px",
  //             }}
  //             key={quater}
  //           >
  //             <h4>Quater {quater}</h4>
  //             {Object.entries(months).map(([month, days]) => {
  //               return (
  //                 <div
  //                   style={{
  //                     border: "1px solid black",
  //                     marginBottom: "10px",
  //                     padding: "10px",
  //                   }}
  //                   key={month}
  //                 >
  //                   <h4>Month {month}</h4>
  //                   <p>{(days as number[]).join(" | ")}</p>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // });
  // return <>{ui}</>;
  return <></>;
}

export default CalenderUI;
