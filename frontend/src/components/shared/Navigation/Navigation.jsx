import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link className={styles.brandStyle} to="/">
        <img src="/images/logo.png " alt="" />
        <span className={styles.logoText}>CodersHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
