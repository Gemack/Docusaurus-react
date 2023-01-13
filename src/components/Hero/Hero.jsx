import React from "react";
import styles from "./style.module.css";
import img from "../../../static/img/gems.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <header>
      <div className={styles.main}>
        <img className={styles.image} src={img} alt="gems logo" />
        <div className={styles.hero_button}>
          <Button text="Get Started" url="/docs/intro" />
          <Button text="Github" url="https://github.com/" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
