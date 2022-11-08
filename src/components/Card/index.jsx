// libs
import React, { memo } from "react";
// others
import UserContext from "~/context/userContext";
import styles from "./Card.module.scss";

const Card = ({ _id, nickname, description, mentees }) => {
  const [user] = UserContext();

  const onSubmitMatch = (mentorId, voterId) => {
    console.log(mentorId, voterId);
    // https-server instant
  };

  return (
    <div
      className={styles["card-wrapper"]}
      style={{
        backgroundImage: "url('/avatar.webp')",
      }}
    >
      <p className={styles["nickname"]}>{nickname}</p>
      <article className={styles["desc"]}>{description}</article>
      {mentees.length < 2 ? (
        <button
          className={styles["match-button"]}
          onClick={() => onSubmitMatch(_id, user.userId)}
        />
      ) : (
        <p className={styles["match-full"]}>Đã đầy</p>
      )}
    </div>
  );
};

export default memo(Card);
