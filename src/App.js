import dayjs from "dayjs";
import classes from "./App.module.scss";
import Calendar from "./components/calendar/Calendar";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <div className={classes.app_wrapper}>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        disableDates={[]}
      />
    </div>
  );
}

export default App;
