import React from "react";

import styles from "./Navigation.module.scss";

const Navigation = ({ setGoToSlide }) => {
  const handleNextClick = () => {
    setGoToSlide((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setGoToSlide((prev) => prev - 1);
  };

  return (
    <div className={styles["navigation"]}>
      <button
        type="button"
        className={`${styles["navigation__btn"]} ${styles["navigation__btn--prev"]}`}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        type="button"
        className={`${styles["navigation__btn"]} ${styles["navigation__btn-next"]}`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
