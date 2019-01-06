import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import NavLinkDrpodown from "./NavLinkDrpodown";
import DropdownContent from "./DropdownContent";
import sky from "./Images/sky.png";
import classNames from 'classnames';
import { Link } from "gatsby";

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>
      <Logo />

      <Nav>
        <NavLink to="/" exact="true">
          Home
        </NavLink>
        <NavLink to="/land tours">Land Tours</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLinkDrpodown to="/dropdown">Dropdown
          <DropdownContent>
            <Link to ="/krka">
            <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={sky} alt="Cinque Terre"   />
            </Link>
            <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={sky} alt="Cinque Terre"  />
            <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={sky} alt="Cinque Terre"   />
            <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={sky} alt="Cinque Terre" />
          </DropdownContent>
        </NavLinkDrpodown>
      </Nav>

    </Container>
  </header>
);
