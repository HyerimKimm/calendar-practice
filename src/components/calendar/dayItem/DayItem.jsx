import React from "react";
import classes from "./DayItem.module.scss";
import dayjs from "dayjs";

const DayItem = ({ date, selectedDate, setSelectedDate, disableDates }) => {
  const today = dayjs();
  // 오늘날짜보다 이전 날짜인 경우, disableDates에 포함되어 있는 날짜인 경우
  const isDisable =
    date.isBefore(today.startOf("day")) ||
    disableDates
      .map((date) => date.format("YYYYMMDD"))
      .includes(date.format("YYYYMMDD"));

  const handleDateClick = () => {
    if (isDisable) return;
    setSelectedDate(date);
  };

  // 비선택 처리 기준 : 오늘 보다 이전날짜인 경우, 기타 예약 불가 일자인 경우
  return (
    <div
      className={`${classes.item_wrapper} 
      ${
        today.format("YYYYMMDD") === date.format("YYYYMMDD")
          ? classes.today
          : ""
      }s
      ${
        date.format("YYYYMMDD") === selectedDate.format("YYYYMMDD")
          ? classes.selected
          : ""
      }
      ${isDisable ? classes.disable : ""}
      ${
        date.format("YYYYMM") !== selectedDate.format("YYYYMM")
          ? classes.disable
          : ""
      }`}
      onClick={handleDateClick}
    >
      {date.format("D")}
      <label className={`${classes.today} ${classes.label}`}>
        {today.format("YYYYMMDD") === date.format("YYYYMMDD") && "TODAY"}
      </label>
    </div>
  );
};

export default DayItem;
