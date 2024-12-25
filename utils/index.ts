import type { MonthIndex, Year } from "~/types";

export const agoCalculator = (month: MonthIndex, year: Year): string => {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  let monthResult: number;
  let yearResult: number;

  if (year > currentYear) throw new Error("Enter a valid year!");

  if (currentYear - year === 0) {
    if (month > currentMonth) throw new Error("Enter a valid month!");

    monthResult = currentMonth - month;
    return monthStringResult(monthResult);
  } else {
    if (month > currentMonth) {
      yearResult = currentYear - year - 1;
      monthResult = 12 - (month - currentMonth);
      return `${yearStringResult(yearResult)} and ${monthStringResult(
        monthResult
      )}`;
    } else if (month == currentMonth) {
      yearResult = currentYear - year;
      return `${yearStringResult(yearResult)} ago`;
    } else {
      yearResult = currentYear - year;
      monthResult = currentMonth - month;
      return `${yearStringResult(yearResult)} and ${monthStringResult(
        monthResult
      )}`;
    }
  }
};

const monthStringResult = (month: number): string => {
  if (month > 1) {
    return `${month} months ago`;
  } else {
    return `${month} month ago`;
  }
};
const yearStringResult = (year: number): string => {
  if (year > 1) {
    return `${year} years`;
  } else {
    return `${year} year`;
  }
};
