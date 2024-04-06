import React, { useMemo, useState } from "react";
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
  const dates = useMemo(
    () => makeDates(daysInMonth, firstDayOfMonth),
    [daysInMonth, firstDayOfMonth]
  );
  const weekHeaders = makeWeekdays();

  // 일자 선택했을 때 실행
  function handleNewDateClick(newDate) {
    setSelectedDay(newDate);
  }

  // 해당 월의 시작일을 받아서 해당 월의 전체 일자 배열을 반환하는 함수
  function makeDates(daysInMonth, firstDayOfMonth) {
    const dates = [];

    for (let i = 0; i < daysInMonth; i++) {
      const date = dayjs(firstDayOfMonth).add(i, "day");
      dates.push(date);
    }

    switch (firstDayOfMonth.format("ddd")) {
      case "일":
        break;
      case "토":
        dates.unshift("");
      case "금":
        dates.unshift("");
      case "목":
        dates.unshift("");
      case "수":
        dates.unshift("");
      case "화":
        dates.unshift("");
      case "월":
        dates.unshift("");
        break;
      default:
        break;
    }

    return dates;
  }

  // 요일 배열 얻기 (일월화수목금토)
  function makeWeekdays() {
    const weekdays = [];
    for (let i = 0; i < 7; i++) {
      weekdays.push(dayjs().day(i).format("ddd"));
    }
    return weekdays;
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
        <button onClick={handleGetPrevMonth}>{`<`}</button>
        <div>{selectedDay.format("YYYY-MM-DD ddd")}</div>
        <button onClick={handleGetNextMonth}>{`>`}</button>
      </header>
      <header className={classes.calendar_day_of_week_label_wrapper}>
        {weekHeaders.map((ddd, index) => (
          <div key={index}>{ddd}</div>
        ))}
      </header>
      <main className={classes.calendar_main_wrapper}>
        {dates.map((date, index) => {
          if (date === "") return <div></div>;
          return (
            <div
              key={index}
              className={`${classes.day_item}  
              ${
                date.format("YYYYMMDD") === today.format("YYYYMMDD") &&
                classes.today
              } 
              ${date.format("ddd") === "일" && classes.sunday} ${
                date.format("ddd") === "토" && classes.saturday
              } 
              ${
                date.format("YYYYMMDD") === selectedDay.format("YYYYMMDD") &&
                classes.selected
              }`}
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
