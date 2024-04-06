import classes from "./App.module.scss";
import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <div className={classes.app_wrapper}>
      <h3>캘린더</h3>
      <Calendar />
    </div>
  );
}

export default App;
