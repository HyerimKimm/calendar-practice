import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import classes from "./Item.module.scss";

import { calendarStore } from "../calenderStore";

dayjs.locale("ko");

const Item = ({ date }) => {
  // 오늘 날짜
  const today = dayjs();
  //선택한 날짜
  const { selectedDay, setSelectedDay } = calendarStore();

  // 일자 선택했을 때 실행
  function handleNewDateClick(newDate) {
    setSelectedDay(newDate);
  }

  if (date === "") return <div></div>;

  return (
    <div
      className={`
      ${classes.day_item}  
      ${date.format("YYYYMMDD") === today.format("YYYYMMDD") && classes.today} 
      ${date.format("ddd") === "일" ? classes.sunday : ""} ${
        date.format("ddd") === "토" ? classes.saturday : ""
      } 
      ${
        date.format("YYYYMMDD") === selectedDay.format("YYYYMMDD") &&
        classes.selected
      }
      `}
      onClick={() => {
        handleNewDateClick(date);
      }}
    >
      {date.format("D")}
      {date.format("YYYYMMDD") === today.format("YYYYMMDD") && (
        <div className={classes.label}>오늘</div>
      )}
    </div>
  );
};

export default Item;
