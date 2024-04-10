import React, { useState } from "react";
import classes from "./Calendar.module.scss";
import Header from "./header/Header";
import DayTable from "./dayTable/DayTable";
import DayOfWeekLabel from "./dayOfWeekLabel/DayOfWeekLabel";

const Calendar = ({ selectedDate, setSelectedDate, getDisabledDates }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(
    selectedDate.startOf("month")
  );

  return (
    <div className={classes.calendar_wrapper}>
      <Header
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
      />
      <DayOfWeekLabel />
      <DayTable
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        getDisabledDates={getDisabledDates}
      />
    </div>
  );
};

export default Calendar;
