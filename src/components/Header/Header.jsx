import React from "react";

import styles from "./Header.module.scss";
import logoImg from "~/assets/logo.png";

const Header = () => {
  const homeUrl = import.meta.env.PROD ? "/icon-match-fe" : "/";

  return (
    <div className={styles["header"]}>
      <div className={styles["header__inner"]}>
        <a href={homeUrl}>
          <img className={styles["header__logo"]} src={logoImg} alt="logo" />
        </a>
        <h1 className={styles["header__name"]}>Mentor Match</h1>
      </div>
    </div>
  );
};

export default Header;
