import React from "react";
import classes from "./Header.module.scss";
import Arrow from "../../../assets/images/Arrow";

const Header = ({ selectedDate, setSelectedDate }) => {
  const handleGoPrevClick = () => {
    setSelectedDate((prev) => prev.subtract(1, "month"));
  };

  const handleGoNextClick = () => {
    setSelectedDate((prev) => prev.add(1, "month"));
  };

  return (
    <header className={classes.header_wrapper}>
      <button
        className={`${classes.button} ${classes.prev}`}
        onClick={handleGoPrevClick}
      >
        <Arrow />
      </button>
      <h2>{selectedDate.format("YYYY.MM")}</h2>
      <button
        className={`${classes.button} ${classes.next}`}
        onClick={handleGoNextClick}
      >
        <Arrow />
      </button>
    </header>
  );
};

export default Header;
