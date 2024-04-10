import dayjs from "dayjs";
import classes from "./App.module.scss";
import Calendar from "./components/calendar/Calendar";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const closedDayOfWeek = ["Mon, Wed"];
  const disableDates = [dayjs().add(3, "day")];

  const getDisabledDates = (checkedDate) => {
    // 1. checkedDate가 diableDates에 포함되면 true
    if (
      disableDates
        .map((date) => date.format("YYYYMMDD"))
        .includes(checkedDate.format("YYYYMMDD"))
    )
      return true;

    // 2. checkedDate가 closedDayOfWeek에 해당하는 요일이면 true
    if (closedDayOfWeek.includes(checkedDate.format("ddd"))) return true;

    // 3. checkedDate가 dayjs().startOf('day')보다 이전이면 true
    if (checkedDate.startOf("day").isBefore(dayjs().startOf("day")))
      return true;

    return false;
  };

  return (
    <div className={classes.app_wrapper}>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        getDisabledDates={getDisabledDates}
      />
    </div>
  );
}

export default App;
