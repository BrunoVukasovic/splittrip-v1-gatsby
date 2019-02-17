import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import NavLinkDrpodown from "./NavLinkDrpodown";
import DropdownContent from "./DropdownContent";
import dropKrka from "./Images/dropKrka.png";
import dropPlitvice from "./Images/dropPlitvice.png";
import dropRafting from "./Images/dropRafting.png";
import dropZip from "./Images/dropZip.jpg";


import classNames from 'classnames';
import { Link } from "gatsby";

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>
      <Logo />


        <NavLink to="/" exact="true" className={styles.Home}>
          Home
        </NavLink>

        <NavLink to="/blog" className={styles.TravelStories}>Travel Stories</NavLink>

        <NavLinkDrpodown to="/land tours" className={styles.LandToursDropDown}>Land Tours
          <DropdownContent>
            <Link to ="/krka">
            <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
            </Link>
            <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
            <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
            <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
          </DropdownContent>
        </NavLinkDrpodown>

        <NavLinkDrpodown to="/land tours" className={styles.SeaToursDropDown}>Sea Tours
          <DropdownContent>
            <Link to ="/krka">
            <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
            </Link>
            <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
            <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
            <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
          </DropdownContent>
        </NavLinkDrpodown>

          <NavLinkDrpodown to="/land tours" className={styles.AdventuresDropDown}>Adventures
          <DropdownContent>
            <Link to ="/krka">
            <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
            </Link>
            <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
            <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
            <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
          </DropdownContent>

        </NavLinkDrpodown>





    </Container>
  </header>
);
