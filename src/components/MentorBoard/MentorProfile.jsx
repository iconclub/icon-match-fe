import React from "react";

import styles from "./MentorProfile.module.scss";
import hinhMeoImg from "~/assets/hinh-meo.png";

const MentorProfile = ({ avatar = hinhMeoImg, nickname, mentees }) => {
  return (
    <div className={styles["profile"]}>
      <div className={styles["profile__header"]}>
        <img src={avatar} alt="mentor-avatar" className={styles["profile__avatar"]} />
        <h3 className={styles["profile__nickname"]}>{nickname}</h3>
        <p className={styles["profile__num-mentees"]}>{mentees.length}/5</p>
      </div>

      <ul className={styles["profile__mentees"]}>
        {mentees.length > 0 ? (
          mentees.map((mentee, i) => <li key={i}>{mentee.studentId}</li>)
        ) : (
          <li>No meentee yet</li>
        )}
      </ul>
    </div>
  );
};

export default MentorProfile;
