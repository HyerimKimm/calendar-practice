import dayjs from "dayjs";
import React, { useMemo } from "react";
import DayItem from "../dayItem/DayItem.jsx";
import classes from "./DayTable.module.scss";

const DayTable = ({ selectedDate, setSelectedDate, getDisabledDates }) => {
  // 선택한 날짜를 받아서 선택한 날짜의 월의 전체 일자 배열을 반환하는 함수
  const makeDates = (selectedDate) => {
    const daysInMonth = selectedDate.daysInMonth(); // 선택한 날짜의 월의 전체 일자
    const firstDayOfMonth = dayjs(selectedDate).startOf("month");

    const dates = [];

    for (let i = 0; i < daysInMonth; i++) {
      const date = dayjs(firstDayOfMonth).add(i, "day");
      dates.push(date);
    }

    switch (firstDayOfMonth.format("ddd")) {
      case "Sun":
        break;
      case "Mon":
        dates.unshift(dayjs(firstDayOfMonth).subtract(1, "day"));
        break;
      case "Tue":
        dates.unshift(dayjs(firstDayOfMonth).subtract(1, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(2, "day"));
        break;
      case "Wed":
        dates.unshift(dayjs(firstDayOfMonth).subtract(1, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(2, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(3, "day"));
        break;
      case "Thu":
        dates.unshift(dayjs(firstDayOfMonth).subtract(1, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(2, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(3, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(4, "day"));
        break;
      case "Fri":
        dates.unshift(dayjs(firstDayOfMonth).subtract(1, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(2, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(3, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(4, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(5, "day"));
        break;
      case "Sat":
        dates.unshift(dayjs(firstDayOfMonth).subtract(1, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(2, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(3, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(4, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(5, "day"));
        dates.unshift(dayjs(firstDayOfMonth).subtract(6, "day"));
        break;
      default:
        break;
    }

    return dates;
  };

  const datesOfMonth = useMemo(() => makeDates(selectedDate), [selectedDate]);

  return (
    <div className={classes.day_table_wrapper}>
      <div className={classes.day_table_grid_wrapper}>
        {datesOfMonth.map((date, index) => (
          <DayItem
            key={index}
            date={date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            isDisable={getDisabledDates(date)}
          />
        ))}
      </div>
    </div>
  );
};

export default DayTable;
