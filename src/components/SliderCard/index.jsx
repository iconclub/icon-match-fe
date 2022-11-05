import React, { useMemo, useState } from "react";
import Carousel from "react-spring-3d-carousel";
// components
import Card from "../Card";

const SliderCard = () => {
  const [show, setShow] = useState("");

  const slides = useMemo(
    () =>
      [
        {
          key: 1,
          content: <Card />,
        },
        {
          key: 2,
          content: <Card />,
        },
        {
          key: 3,
          content: <Card />,
        },
        {
          key: 4,
          content: <Card />,
        },
        {
          key: 5,
          content: <Card />,
        },
        {
          key: 6,
          content: <Card />,
        },
        {
          key: 7,
          content: <Card />,
        },
        {
          key: 8,
          content: <Card />,
        },
      ].map((slide, index) => {
        return { ...slide, onClick: () => setShow(index) };
      }),
    []
  );

  return (
    <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
      <Carousel slides={slides} goToSlide={show} offsetRadius="4" showNavigation />
    </div>
  );
};

export default SliderCard;
