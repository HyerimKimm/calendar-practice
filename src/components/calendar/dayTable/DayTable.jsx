import dayjs from "dayjs";
import React, { useMemo } from "react";
import DayItem from "../dayItem/DayItem.jsx";
import classes from "./DayTable.module.scss";

//selectedStartDate={selectedStartDate}
//setSelectedStartDate={setSelectedStartDate}
const DayTable = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedDate,
  setSelectedDate,
  getDisabledDates,
}) => {
  // 선택한 월의 첫번째 날짜를 받아서 월의 전체 일자 배열을 반환하는 함수
  const makeDates = (selectedStartDate) => {
    const daysInMonth = selectedStartDate.daysInMonth(); // 월의 전체 일자

    const dates = [];

    for (let i = 0; i < daysInMonth; i++) {
      const date = dayjs(selectedStartDate).add(i, "day");
      dates.push(date);
    }

    switch (selectedStartDate.format("ddd")) {
      case "Sun":
        break;
      case "Mon":
        dates.unshift(dayjs(selectedStartDate).subtract(1, "day"));
        break;
      case "Tue":
        dates.unshift(dayjs(selectedStartDate).subtract(1, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(2, "day"));
        break;
      case "Wed":
        dates.unshift(dayjs(selectedStartDate).subtract(1, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(2, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(3, "day"));
        break;
      case "Thu":
        dates.unshift(dayjs(selectedStartDate).subtract(1, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(2, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(3, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(4, "day"));
        break;
      case "Fri":
        dates.unshift(dayjs(selectedStartDate).subtract(1, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(2, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(3, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(4, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(5, "day"));
        break;
      case "Sat":
        dates.unshift(dayjs(selectedStartDate).subtract(1, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(2, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(3, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(4, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(5, "day"));
        dates.unshift(dayjs(selectedStartDate).subtract(6, "day"));
        break;
      default:
        break;
    }

    return dates;
  };

  const datesOfMonth = useMemo(
    () => makeDates(selectedStartDate),
    [selectedStartDate]
  );

  return (
    <div className={classes.day_table_wrapper}>
      <div className={classes.day_table_grid_wrapper}>
        {datesOfMonth.map((date, index) => (
          <DayItem
            key={index}
            date={date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedStartDate={selectedStartDate}
            setSelectedStartDate={setSelectedStartDate}
            getDisabledDates={getDisabledDates}
          />
        ))}
      </div>
    </div>
  );
};

export default DayTable;
