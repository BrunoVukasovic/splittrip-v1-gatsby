import React from "react";
import styles from "./styles.module.css";
import mainImage from "./images/plitvice.jpg";


export default ({ source }) => (
    <div> <img className={styles.mainImage} src={mainImage} alt="Main Image"></img>
    </div>
  );