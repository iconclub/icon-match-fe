import React from "react";

import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import SliderCard from "./components/SliderCard/SliderCard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SliderCard />
    </div>
  );
};

export default App;
