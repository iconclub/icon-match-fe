/* eslint-disable no-unused-vars */
// libs
import React, { memo } from "react";

const Card = ({
  type,
  text,
  size,
  onClick,
  draggable,
  disabled,
  idx,
  animateNew,
  animateDiscard,
  changeTabIndex,
  blackCard,
  ariaHidden,
  cardsInPlay,
  discarded,
}) => {
  return (
    <div>
      <img
        src="https://i.picsum.photos/id/28/200/300.jpg?hmac=PtGtIbRuuZW5gEPGm0h1Y-koEaki3vffOYcq3TdSAlA"
        height="300"
        width="200"
        alt="card"
      />
    </div>
  );
};

export default memo(Card);
