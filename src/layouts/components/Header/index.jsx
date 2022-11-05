// libs
import React, { useState } from "react";
// others
import logo from "~/assets/logo.png";
import userImg from "~/assets/user.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  const [user] = useState({
    name: "Nguyễn Đại Hiệp",
    mentorId: "51900683",
  });

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-wrapper-inner"]}>
        <a href="/" className={styles["logo"]}>
          <img className={styles["logo-image"]} src={logo} alt="logo" />
        </a>
        <div className={styles["user"]}>
          <span className={styles["user-name"]}>{user ? user.name : "Guest"}</span>
          <img className={styles["user-image"]} src={userImg} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
