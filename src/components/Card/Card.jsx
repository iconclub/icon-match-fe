import React, { memo } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import styles from "./Card.module.scss";
import avatar from "~/assets/hinh-meo.png";
// import monLeoImg from "~/assets/mon-leo.jpg";
import heartImg from "~/assets/heart.webp";

const Card = ({
  _id,
  nickname,
  description,
  mentees,
  openModal,
  setMentorChoosing,
  setGoToSlide,
}) => {
  const cardWidth = 350;
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, movement: [mx], last, cancel }) => {
    if (last && mx > cardWidth / 2) {
      setGoToSlide((prev) => prev - 1);
      cancel();
    } else if (last && mx < -cardWidth / 2) {
      setGoToSlide((prev) => prev + 1);
      cancel();
    }
    api.start({ x: down ? mx : 0, immediate: down });
  });

  const handleMatchClick = () => {
    setMentorChoosing({ mentorId: _id, nickname });
    openModal();
  };

  return (
    <animated.div className={styles["card"]} {...bind()} style={{ x }}>
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
    </animated.div>
  );
};

export default memo(Card);
