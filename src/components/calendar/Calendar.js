import React, { useEffect, useMemo, useState } from "react";
import classes from "./Calendar.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const Calendar = () => {
  //선택한 날짜
  const [selectedDay, setSelectedDay] = useState(dayjs());
  // 오늘 날짜
  const today = dayjs();
  // 선택한 날짜의 월
  const daysInMonth = selectedDay.daysInMonth();
  // 선택한 날짜 월의 첫번쨰 날짜
  const firstDayOfMonth = dayjs(selectedDay).startOf("month").locale("ko");
  // 선택한 날짜 월의 전체 날자를 저장하는 배열
  const dates = useMemo(() => makeDates(daysInMonth), [daysInMonth]);

  // 일자 선택했을 때 실행
  function handleNewDateClick(newDate) {
    setSelectedDay(newDate);
  }

  // 해당 월의 시작일을 받아서 해당 월의 전체 일자 배열을 반환하는 함수
  function makeDates(daysInMonth) {
    const dates = [];

    for (let i = 0; i < daysInMonth; i++) {
      const date = dayjs(firstDayOfMonth).add(i, "day");
      dates.push(date);
    }

    return dates;
  }

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
    <div className={classes.calendar_wrapper}>
      <header className={classes.calendar_header_wrapper}>
        <div>선택한 날짜 : {selectedDay.format("YYYY-MM-DD ddd")}</div>
        <button onClick={handleGetPrevMonth}>이전 달로 가기</button>
        <button onClick={handleGetNextMonth}>다음 달로 가기</button>
      </header>
      <main className={classes.calendar_main_wrapper}>
        {dates.map((date, index) => {
          return (
            <div
              key={index}
              className={`${classes.day_item} ${
                date.format("YYYYMMDD") === selectedDay.format("YYYYMMDD") &&
                classes.selected
              } ${
                date.format("YYYYMMDD") === today.format("YYYYMMDD") &&
                classes.today
              } ${date.format("ddd") === "일" && classes.sunday}`}
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
        })}
      </main>
    </div>
  );
};

export default Calendar;
