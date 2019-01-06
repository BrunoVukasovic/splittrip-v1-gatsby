import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import sky from "./Images/sky.png";

export default ({ children, ...rest }) => (
  <div className={styles.Dropdown}>
    <Link
      className={styles.NavLink}
      activeClassName={styles.NavLink__active}
      {...rest}
    >
      {children}
    </Link>

    <div className={styles.DropdownContent}>
      <img className={styles.Image1} src={sky} alt="Cinque Terre" width="100"  />
      <img className={styles.Image2} src={sky} alt="Cinque Terre" width="100" />
      <img className={styles.Image3} src={sky} alt="Cinque Terre" width="100"  />
      <img className={styles.Image4} src={sky} alt="Cinque Terre" width="100" />
    </div>
  </div>
);
