import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import NavLinkDrpodown from "./NavLinkDrpodown";
import DropdownContent from "./DropdownContent";
import dropKrka from "./Images/dropKrka.jpg";
import dropPlitvice from "./Images/dropPlitvice.jpg";
import dropKlis from "./Images/dropKlis.jpg";
import dropOmis from "./Images/dropOmis.jpg";
import dropDubrovnik from "./Images/dropDubrovnik.jpg";
import dropMostar from "./Images/dropMostar.jpg";

import dropRafting from "./Images/dropRafting.jpg";
import dropZip from "./Images/dropZip.jpg";
import dropCanyoning from "./Images/dropCanyoning.jpg";
import dropCycling from "./Images/dropCycling.jpg";
import dropDiving from "./Images/dropDiving.jpg";
import dropSeaKayaking from "./Images/dropSeaKayaking.jpg";

import dropBlueCave from "./Images/dropBlueCave.jpg"; 
import classNames from 'classnames';
import { Link } from "gatsby";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'



export default () => {
  
  library.add(faSearch)
  library.add(faAngleDoubleDown)
  
  return(
  <header className={styles.Header}>
    <Container className={styles.Container}>

      <div className={styles.Logo}>
        <Logo  />
      </div>

      <div className={styles.MobileDropdown}>
        <button className={styles.MobileDropbtn}>Dropdown <FontAwesomeIcon icon="angle-double-down" /></button>
        <div className={styles.MobileDropdownContent}>
          <Link to="/" exact="true" className={styles.MobileLink}>Home</Link>
          <Link to="/land tours" className={styles.MobileLink}>Land Tours</Link>
          <Link to="/land tours" className={styles.MobileLink}>Land Tours</Link>
          <Link to="/land tours" className={styles.MobileLink}>Land Tours</Link>
          <Link to="/land tours" className={styles.MobileLink}>Land Tours</Link>
          <Link to="/land tours" className={styles.MobileLink}>Land Tours</Link>
          <Link to="/land tours" className={styles.MobileLink}>Land Tours</Link>
          
        </div>
      </div>

      <div className={styles.Home}>
        <NavLink to="/" exact="true" >
          Home
        </NavLink>
      </div>
      
      <div className={styles.TravelStories}>
        <NavLink to="/blog">Travel Stories</NavLink>
      </div>

      <div className={styles.logIn}>
        <NavLink to="/log-in">My Trips</NavLink>
      </div>

        <div className={styles.LandToursDropDown}>
          <NavLinkDrpodown to="/land tours" >Land Tours <FontAwesomeIcon icon="angle-double-down" />  
            <DropdownContent>
              <Link to ="/krka">
              <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropKrka} alt="Cinque Terre"   />
              </Link>
              <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
              <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropKlis} alt="Cinque Terre"   />
              <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropOmis} alt="Cinque Terre" />
              <img className={classNames({[styles.DropImage]: true, [styles.Image5]: true})} src={dropDubrovnik} alt="Cinque Terre" />
              <img className={classNames({[styles.DropImage]: true, [styles.Image6]: true})} src={dropMostar} alt="Cinque Terre" />
            </DropdownContent>
          </NavLinkDrpodown>
        </div>

        <div className={styles.SeaToursDropDown}>
          <NavLinkDrpodown to="/land tours" >Sea Tours <FontAwesomeIcon icon="angle-double-down" />  
            <DropdownContent>
              <Link to ="/krka">
              <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropBlueCave} alt="Cinque Terre"   />
              </Link>
              <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropPlitvice} alt="Cinque Terre"  />
              <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropRafting} alt="Cinque Terre"   />
              <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropZip} alt="Cinque Terre" />
            </DropdownContent>
          </NavLinkDrpodown>
        </div>

        <div className={styles.AdventuresDropDown}>
          <NavLinkDrpodown to="/land tours">Adventures <FontAwesomeIcon icon="angle-double-down" />  
          <DropdownContent>
            <img className={classNames({[styles.DropImage]: true, [styles.Image1]: true})} src={dropRafting} alt="Cinque Terre"   />
            <img className={classNames({[styles.DropImage]: true, [styles.Image2]: true})} src={dropZip} alt="Cinque Terre" />
            <img className={classNames({[styles.DropImage]: true, [styles.Image3]: true})} src={dropCanyoning} alt="Cinque Terre" />
            <img className={classNames({[styles.DropImage]: true, [styles.Image4]: true})} src={dropCycling} alt="Cinque Terre" />
            <img className={classNames({[styles.DropImage]: true, [styles.Image5]: true})} src={dropDiving} alt="Cinque Terre" />
            <img className={classNames({[styles.DropImage]: true, [styles.Image6]: true})} src={dropSeaKayaking} alt="Cinque Terre" />
          </DropdownContent>
          </NavLinkDrpodown>
        </div>

        <div className={styles.searchBar}>
          <NavLink to="/search" className={styles.searchBar}>
            Search &nbsp;
            <FontAwesomeIcon icon="search" />  
          </NavLink>
        </div>
        
    </Container>
  </header>
);
};