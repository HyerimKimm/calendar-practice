import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import classes from "./Header.module.scss";
import { calendarStore } from "../calenderStore";
import Arrow from "../../../assets/images/Arrow";

dayjs.locale("ko");

const Header = () => {
  const { selectedDay, setSelectedDay } = calendarStore();
  // selectedDay를 이전달로 변경
  function handleGetPrevMonth() {
    const prevMonth = selectedDay.subtract(1, "month");
    setSelectedDay(prevMonth);
  }

  // selectedDay를 값을 다음달로 변경
  function handleGetNextMonth() {
    const nextMonth = selectedDay.add(1, "month");
    setSelectedDay(nextMonth);
  }

  return (
    <header className={classes.calendar_header_wrapper}>
      <button onClick={handleGetPrevMonth}>
        <Arrow width={16} height={16} rotate={180} />
      </button>
      <h5 className={classes.title}>{selectedDay.format("YYYY.MM")}</h5>
      <button onClick={handleGetNextMonth}>
        <Arrow width={16} height={16} rotate={0} />
      </button>
    </header>
  );
};

export default Header;
