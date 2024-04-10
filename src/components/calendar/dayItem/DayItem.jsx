import React from "react";
import classes from "./DayItem.module.scss";
import dayjs from "dayjs";

const DayItem = ({
  date,
  selectedDate,
  setSelectedDate,
  isDisable = false,
}) => {
  const today = dayjs();

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
      }
      ${
        date.format("YYYYMMDD") === selectedDate.format("YYYYMMDD")
          ? classes.selected
          : ""
      }
      ${isDisable ? classes.disable : ""}
      ${
        /* 저번 달 숫자인 경우 회색 처리 */
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
