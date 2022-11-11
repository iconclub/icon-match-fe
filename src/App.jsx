import React from "react";

import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import SliderCard from "./components/SliderCard/SliderCard";
import MentorBoard from "./components/MentorBoard/MentorBoard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className={styles["container"]}>
        <MentorBoard />
        <SliderCard />
      </div>
    </div>
  );
};

export default App;
