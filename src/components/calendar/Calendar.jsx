import React from "react";
import classes from "./Calendar.module.scss";
import Header from "./header/Header";
import DayTable from "./dayTable/DayTable";
import DayOfWeekLabel from "./dayOfWeekLabel/DayOfWeekLabel";

const Calendar = ({ selectedDate, setSelectedDate, getDisabledDates }) => {
  return (
    <div className={classes.calendar_wrapper}>
      <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <DayOfWeekLabel />
      <DayTable
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        getDisabledDates={getDisabledDates}
      />
    </div>
  );
};

export default Calendar;
