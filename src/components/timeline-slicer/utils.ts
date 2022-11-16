import { useEffect, useRef } from "react";

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export interface Calender {
  years: {
    [key: string]: {
      quaters: {
        [key: string]: {
          months: {
            [key: string]: {
              days: {
                [key: string]: Date;
              };
              startDate: Date;
              endDate: Date;
            };
          };
          startDate: Date;
          endDate: Date;
        };
      };
      startDate: Date;
      endDate: Date;
    };
  };
  startDate: Date;
  endDate: Date;
}

// export interface Calender {
//   [key: string]: {
//     // year
//     [key: string]: {
//       // quater
//       [key: string]: number[]; // month
//     };
//   };
// }

export function useHorizontalScroll() {
  const elRef: any = useRef();
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

export const getCalender = (startDate: Date, endDate: Date) => {
  let calender: Calender = {
    years: {},
    startDate: new Date(startDate.getTime()),
    endDate: endDate,
  };

  let _date: any = undefined;
  for (
    _date = new Date(startDate.getTime());
    _date <= endDate;
    _date.setDate(_date.getDate() + 1)
  ) {
    const _year = _date.getFullYear();
    const _quater = Math.floor(_date.getMonth() / 3) + 1;
    const _month = _date.getMonth();
    const _day = _date.getDate();

    if (!(_year in calender.years)) {
      let _endDate = new Date(_year + 1, 0); // First day of next quater;
      _endDate.setDate(0);
      calender.years[_year] = {
        quaters: {},
        startDate: new Date(_year, 0),
        endDate: _endDate,
      };
    }

    if (!(_quater in calender.years[_year].quaters)) {
      let _endDate = new Date(_year, _quater * 3); // First day of next quater;
      _endDate.setDate(0);
      calender.years[_year].quaters[_quater] = {
        months: {},
        startDate: new Date(_year, (_quater - 1) * 3),
        endDate: _endDate,
      };
    }

    if (!(_month in calender.years[_year].quaters[_quater].months)) {
      let _endDate = new Date(_year, _month + 1); // First day of next month;
      _endDate.setDate(0);
      calender.years[_year].quaters[_quater].months[_month] = {
        days: {},
        startDate: new Date(_year, _month),
        endDate: _endDate,
      };
    }

    if (!(_day in calender.years[_year].quaters[_quater].months[_month].days)) {
      calender.years[_year].quaters[_quater].months[_month].days[_day] =
        new Date(_year, _month, _day);
    }
  }
  return calender;
};

// function getCalenderLists(calender: Calender) {
//   const years = Object.keys(calender);
//   const quaters = Object.values(calender).map((month) => Object.keys(month));
//   const months = Object.values(calender).map((month) => Object.values(month));
//   return { years, quaters, months };
// }
