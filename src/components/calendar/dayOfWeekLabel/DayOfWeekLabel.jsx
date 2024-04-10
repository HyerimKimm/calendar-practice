import React from "react";
import dayjs from "dayjs";
import classes from "./DayOfWeekLabel.module.scss";

dayjs.locale("ko");

const DayOfWeekLabel = () => {
  const weekHeaders = makeWeekdays();

  // 요일 배열 얻기 (일월화수목금토)
  function makeWeekdays() {
    const weekdays = [];
    for (let i = 0; i < 7; i++) {
      weekdays.push(dayjs().day(i).format("ddd"));
    }
    return weekdays;
  }

  return (
    <ul className={classes.day_of_week_label_wrapper}>
      {weekHeaders.map((ddd, index) => (
        <li key={index} className={classes.day_of_week_label_li}>
          {ddd}
        </li>
      ))}
    </ul>
  );
};

export default DayOfWeekLabel;
