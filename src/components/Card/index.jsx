// libs
import React, { memo } from "react";
// others
import UserContext from "~/context/userContext";
import styles from "./Card.module.scss";

const Card = ({ mentorId, nickname, desc, avt, full }) => {
  const [user] = UserContext();

  const onSubmitMatch = (mentorId, voterId) => {
    console.log(mentorId, voterId);
    // https-server instant
  };

  return (
    <div
      className={styles["card-wrapper"]}
      style={{
        backgroundImage: `url("${avt}")`,
      }}
    >
      <p className={styles["nickname"]}>{nickname}</p>
      <article className={styles["desc"]}>{desc}</article>
      {!full ? (
        <button
          className={styles["match-button"]}
          onClick={() => onSubmitMatch(mentorId, user.userId)}
        />
      ) : (
        <p className={styles["match-full"]}>Đã đầy</p>
      )}
    </div>
  );
};

export default memo(Card);
