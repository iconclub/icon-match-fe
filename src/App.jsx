import React from "react";

import "react-toastify/dist/ReactToastify.css";
import styles from './components/MentorList/MentorList.module.scss'
import Header from "./components/Header/Header";
import SliderCard from "./components/SliderCard/SliderCard";
import Board from "./components/MentorList/Board/Board"

const App = () => {
  return (
    <div className="app" >
      <Header />
      <div id={styles['main']}>
        <Board/>
        <SliderCard/>
      </div>
    </div>
  );
};

export default App;
