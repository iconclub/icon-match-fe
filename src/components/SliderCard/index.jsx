// libs
import React, { useState, useCallback, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
// components
import Card from "../Card";
// others
import instance from "~/utils/https-server";

const SliderCard = () => {
  const [show, setShow] = useState("");
  const [slides, setSlides] = useState([]);

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

  const getMentors = useCallback(async () => {
    const mentorList = await instance.get("/api/mentors");

    const temp = mentorList.mentors.map((slide, index) => {
      return { key: slide._id, onClick: () => setShow(index), content: <Card {...slide} /> };
    });

    setSlides(temp);
  }, []);

  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div style={{ width: "960px", height: "600px", margin: "0 auto" }}>
      <Carousel slides={slides} goToSlide={show} offsetRadius="20" />
    </div>
  );
};

export default SliderCard;
