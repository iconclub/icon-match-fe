// libs
import React, { useMemo, useState, useCallback, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
// components
import Card from "../Card";
// others
import MentorList from "~/dataSources/MentorList";

const SliderCard = () => {
  const [show, setShow] = useState("");

  const slides = useMemo(
    () =>
      MentorList.map((slide, index) => {
        return { key: slide.mentorId, onClick: () => setShow(index), content: <Card {...slide} /> };
      }),
    []
  );

  const handleKeyDown = useCallback((e) => {
    const keyCode = e.keyCode;
    if (keyCode === 39) {
      setShow((pre) => pre + 1);
    } else if (keyCode === 37) {
      setShow((pre) => pre - 1);
    } else if (keyCode === 13) {
      console.log(keyCode);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div style={{ width: "560px", height: "500px", margin: "0 auto" }}>
      <Carousel slides={slides} goToSlide={show} offsetRadius="4" />
    </div>
  );
};

export default SliderCard;
