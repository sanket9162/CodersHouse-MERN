import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const history = useHistory();
  const startRegister = () => {
    history.push("/register");
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div>
          <Button onclick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link className={styles.signinLink} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
