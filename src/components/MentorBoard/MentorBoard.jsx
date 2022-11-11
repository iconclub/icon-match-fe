import React, { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./MentorBoard.module.scss";
import MentorProfile from "./MentorProfile";
import { getMentors } from "~/apis/mentor.api";
import { useMentorContext } from "~/contexts/MentorContext";

const Board = () => {
  const { mentors, setMentors, setGoToMentor } = useMentorContext();

  const getMentorList = useCallback(async () => {
    try {
      const data = await getMentors();
      if (!data) {
        throw new Error("List of mentors is empty");
      }
      setMentors(data.mentors);
    } catch (err) {
      toast.error(err.message, { toastId: "fetch-mentors" });
    }
  }, []);

  useEffect(() => {
    getMentorList();
  }, []);

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
