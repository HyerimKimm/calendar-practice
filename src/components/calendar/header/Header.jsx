import React from "react";
import classes from "./Header.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const Header = () => {
  const selectedDay = dayjs();
  const handleGetPrevMonth = () => {};
  const handleGetNextMonth = () => {};

  return (
    <header className={classes.calendar_header_wrapper}>
      <button onClick={handleGetPrevMonth}>{`<`}</button>
      <div>{selectedDay.format("YYYY-MM-DD ddd")}</div>
      <button onClick={handleGetNextMonth}>{`>`}</button>
    </header>
  );
};

export default Header;
