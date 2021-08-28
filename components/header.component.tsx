import React from "react";
import styles from "../styles/Header.module.css";
import SearchFilter from "./searchfilter.component";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__home}>
        <a href="/">Home</a>
      </div>
      <div className={styles["header__icon-container"]}>
        <a href="/"><img src="/icons/stackandname.svg" alt="logo" /></a>
      </div>
      <div className={styles.header__search}>
        <SearchFilter />
      </div>
    </div>
  );
};

export default Header;
