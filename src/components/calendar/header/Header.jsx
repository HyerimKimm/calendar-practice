import React from "react";
import classes from "./Header.module.scss";
import Arrow from "../../../assets/images/Arrow";

const Header = ({ selectedStartDate, setSelectedStartDate }) => {
  const handleGoPrevClick = () => {
    setSelectedStartDate((prev) => prev.subtract(1, "month"));
  };

  const handleGoNextClick = () => {
    setSelectedStartDate((prev) => prev.add(1, "month"));
  };

  return (
    <header className={classes.header_wrapper}>
      <button
        className={`${classes.button} ${classes.prev}`}
        onClick={handleGoPrevClick}
      >
        <Arrow />
      </button>
      <h2>{selectedStartDate.format("YYYY.MM")}</h2>
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
