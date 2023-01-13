import React from "react";
import styles from "./style.module.css";
import Link from "@docusaurus/Link";

const Button = ({ text, url }) => {
  return (
    <Link className={styles["custom_btn"]} to={url}>
      <span>{text}</span>
    </Link>
  );
};

export default Button;
