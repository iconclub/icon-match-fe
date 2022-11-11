import React from "react";

import styles from "./MentorBoard.module.scss";
import MentorProfile from "./MentorProfile";
import { useMentorContext } from "~/contexts/MentorContext";

const Board = () => {
  const { mentors, setGoToMentor } = useMentorContext();

  return (
    <div className={styles["board"]}>
      <h1 className={styles["board__title"]}>Mentor Board</h1>
      <div id={styles["board__profiles"]}>
        {mentors.length > 0 &&
          mentors.map((mentor, i) => (
            <MentorProfile key={i} {...mentor} handleClick={() => setGoToMentor(i)} />
          ))}
      </div>
    </div>
  );
};

export default Board;
