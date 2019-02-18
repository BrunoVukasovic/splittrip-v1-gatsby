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
import FilteredProducts from "../FilteredProducts";


import classNames from 'classnames';
import { Link } from "gatsby";

export default () => {

  
  return(
  <header className={styles.Header}>
    <Container className={styles.Container}>

      <div className={styles.Logo}>
        <Logo  />
      </div>

      <div className={styles.Home}>
        <NavLink to="/" exact="true" >
          Home
        </NavLink>
      </div>
      
        <NavLink to="/blog" className={styles.TravelStories}>Travel Stories</NavLink>

        <div className={styles.LandToursDropDown}>
          <NavLinkDrpodown to="/land tours" >Land Tours
            <DropdownContent>
              <Link to ="/krka">
              <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
              </Link>
              <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
              <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
              <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
            </DropdownContent>
          </NavLinkDrpodown>
        </div>

        <div className={styles.SeaToursDropDown}>
          <NavLinkDrpodown to="/land tours" >Sea Tours
            <DropdownContent>
              <Link to ="/krka">
              <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
              </Link>
              <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
              <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
              <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
            </DropdownContent>
          </NavLinkDrpodown>
        </div>

        <div className={styles.AdventuresDropDown}>
          <NavLinkDrpodown to="/land tours">Adventures
          <DropdownContent>
            <Link to ="/krka">
            <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
            </Link>
            <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
            <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
            <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
          </DropdownContent>
          </NavLinkDrpodown>
        </div>

        <div className={styles.searchBar}>
          <NavLink to="/search" className={styles.searchBar}>Search</NavLink>
        </div>

    </Container>
  </header>
);
};