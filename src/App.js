import dayjs from "dayjs";
import classes from "./App.module.scss";
import Calendar from "./components/calendar/Calendar";

function App() {
  const defaultDate = dayjs().add(1, "day");

  return (
    <div className={classes.app_wrapper}>
      <h2>캘린더</h2>
      <Calendar defaultDate={defaultDate} />
    </div>
  );
}

export default App;
