import React, { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./MentorBoard.module.scss";
import MentorProfile from "./MentorProfile";
import { getMentors } from "~/apis/mentor.api";

const Board = () => {
  const [profiles, setProfiles] = useState([]);

  const getMentorList = useCallback(async () => {
    try {
      const { mentors } = await getMentors();
      if (!mentors) {
        throw new Error("List of mentors is empty");
      }

      setProfiles(mentors);
    } catch (err) {
      toast.error(err.message, { toastId: "list-of-mentors" });
    }
  }, []);

  useEffect(() => {
    getMentorList();
  }, []);

  return (
    <div className={styles["board"]}>
      <h1 className={styles["board__title"]}>Mentor Board</h1>
      <div id={styles["board__profiles"]}>
        {profiles.length > 0 && profiles.map((mentor, i) => <MentorProfile key={i} {...mentor} />)}
      </div>
    </div>
  );
};

export default Board;
