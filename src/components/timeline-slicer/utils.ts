export interface Calender {
  [key: string]: {
    // year
    [key: string]: {
      // quater
      [key: string]: number[]; // month
    };
  };
}

export const getCalender = (startDate: Date, endDate: Date) => {
  let calender: Calender = {};

  let _date: any = undefined;
  for (
    _date = startDate;
    _date <= endDate;
    _date.setDate(_date.getDate() + 1)
  ) {
    const _year = _date.getFullYear();
    const _quater = Math.floor(_date.getMonth() / 3) + 1;
    const _month = _date.getMonth() + 1;
    const _day = _date.getDate();

    if (!(_year in calender)) {
      calender[_year] = {};
    }

    if (!(_quater in calender[_year])) {
      calender[_year][_quater] = {};
    }

    if (!(_month in calender[_year][_quater])) {
      calender[_year][_quater][_month] = [];
    }

    if (!(_day in calender[_year][_quater][_month])) {
      calender[_year][_quater][_month].push(_day);
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
