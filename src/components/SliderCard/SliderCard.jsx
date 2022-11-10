import React, { useState, useCallback, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import styles from "./SliderCard.module.scss";
import Navigation from "./Navigation";
import Card from "../Card/Card";
import Spinner from "./Spinner";
import { getMentors } from "~/apis/mentor.api";
import { sendChooseMentor } from "~/apis/match.api";
// import wait from "~/utils/wait";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: 500,
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

const SliderCard = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [mentorChoosing, setMentorChoosing] = useState(null);
  const [menteeStudentId, setMenteeStudentId] = useState("");

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case "ArrowRight":
        setGoToSlide((prev) => prev + 1);
        break;
      case "ArrowLeft":
        setGoToSlide((prev) => prev - 1);
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const getMentorList = useCallback(async () => {
    try {
      const { mentors } = await getMentors();
      if (!mentors) {
        throw new Error("List of mentors is empty");
      }

      // await wait(2);

      const slides = mentors.map((mentor, i) => {
        return {
          key: uuidv4(),
          onClick: () => setGoToSlide(i),
          content: <Card {...mentor} openModal={openModal} setMentorChoosing={setMentorChoosing} />,
        };
      });

      setSlides(slides);
    } catch (err) {
      toast.error(err.message, {
        toastId: "list-of-mentors",
      });
    }
  }, []);

  const submitChooseMentor = async () => {
    try {
      if (!mentorChoosing) {
        throw new Error("You have to choose a mentor first");
      }

      if (!menteeStudentId) {
        throw new Error("You need to enter student ID first");
      }

      if (!/\w22[\d|h|H|k|K]\d{4}/.test(menteeStudentId)) {
        throw new Error("Invalid Student ID");
      }

      const payload = {
        menteeStudentId,
        mentorId: mentorChoosing.mentorId,
      };

      const data = await sendChooseMentor(payload);
      if (menteeStudentId === data.menteeStudentId && mentorChoosing.mentorId === data.mentorId) {
        toast.success("Matched successfully", {
          toastId: "match-success",
        });
      }
    } catch (err) {
      toast.error(err.message, {
        toastId: "mentor-match",
      });
    }

    closeModal();
  };

  // const chooseMentor = useCallback(async () => {
  //   if (!mentorChoosing) return;
  // });

  useEffect(() => {
    getMentorList();
  }, []);

  return (
    <div className={styles["slider-card"]}>
      {slides.length > 0 ? (
        <>
          <div className={styles["slider-card__content"]}>
            <Carousel slides={slides} goToSlide={goToSlide} offsetRadius={2} />
          </div>
          <Navigation setGoToSlide={setGoToSlide} />
        </>
      ) : (
        <Spinner />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Matching"
        style={modalStyles}
      >
        <div className={styles["modal__header"]}>
          <h1 className={styles["modal__title"]}>Matching</h1>
          <span className={styles["modal__close"]} onClick={closeModal}>
            X
          </span>
        </div>

        <div className={styles["modal__body"]}>
          <h2 className={styles["modal__text"]}>
            You are choosing Mentor{" "}
            <span className={styles["modal__mentor"]}>
              {mentorChoosing && mentorChoosing.nickname}
            </span>
          </h2>

          <p className={styles["modal__required"]}>Please enter your student ID below to match!</p>
          <div className={styles["modal__form-group"]}>
            <input
              type="text"
              className={styles["modal__form-input"]}
              placeholder="Student ID"
              id="student-id"
              onInput={(e) => setMenteeStudentId(e.target.value)}
            />
            <label htmlFor="student-id" className={styles["modal__form-label"]}>
              Student ID
            </label>
          </div>

          <button
            type="button"
            className={styles["modal__btn-submit"]}
            onClick={submitChooseMentor}
          >
            MATCH
          </button>
        </div>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default SliderCard;