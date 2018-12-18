import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

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
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
);
