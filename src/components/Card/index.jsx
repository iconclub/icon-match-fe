/* eslint-disable no-unused-vars */
// libs
import React, { memo } from "react";

const Card = ({ mentorId, name, nickname, desc }) => {
  return (
    <div>
      <img src="https://via.placeholder.com/200x300.webp" height="300" width="200" alt="card" />
    </div>
  );
};

export default memo(Card);
