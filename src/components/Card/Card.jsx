import React, { memo } from "react";

import styles from "./Card.module.scss";
import avatar from "~/assets/hinh-meo.png";
// import monLeoImg from "~/assets/mon-leo.jpg";
import heartImg from "~/assets/heart.webp";

const Card = ({ _id, nickname, description, mentees, openModal, setMentorChoosing }) => {
  const handleMatchClick = () => {
    setMentorChoosing({ mentorId: _id, nickname });
    openModal();
  };

  return (
    <div className={styles["card"]}>
      <img src={avatar} alt="avatar" className={styles["card__avatar"]} />
      <div className={styles["card__content"]}>
        <p className={styles["card__name"]}>{nickname}</p>
        <p className={styles["card__description"]}>{description}</p>
        <p
          className={`${styles["card__mentees"]} ${
            mentees.length >= 5 ? styles["card__mentees--full"] : ""
          }`}
        >
          {mentees.length}/5
        </p>
        {mentees.length < 5 ? (
          <img
            src={heartImg}
            alt="btn-match"
            className={styles["card__btn-match"]}
            onClick={handleMatchClick}
          />
        ) : (
          <h2 className={styles["card__full"]}>FULL</h2>
        )}
      </div>
    </div>
  );
};

export default memo(Card);
