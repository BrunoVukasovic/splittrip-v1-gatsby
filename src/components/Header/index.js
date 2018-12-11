import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import NavLinkDrpodown from "./NavLinkDrpodown";

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
        <NavLinkDrpodown to="/dropdown">Dropdown</NavLinkDrpodown>
      </Nav>

    </Container>
  </header>
);
