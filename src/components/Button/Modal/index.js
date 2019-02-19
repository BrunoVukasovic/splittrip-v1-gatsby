import React, { Component } from "react";
import styles from "./styles.module.css";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
    console.log(props);
    console.log(props.type);
  }
  
  handleClick(){
      console.log("klik!!!!");
      this.setState({ clicked: true});
  }

  render() {
      
    if(this.props.type == "Contact Us"){
        return(
          <div>
            <label for="fname">First Name</label>
            <input className={styles.InputText} type="text" id="fname" name="firstname" placeholder="Your name.." />
        
            <label for="lname">Last Name</label>
            <input className={styles.InputText} type="text" id="lname" name="lastname" placeholder="Your last name.." />
        
            <label for="country">Country</label>
            <select className={styles.InputText} id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          
            <input className={styles.InputSubmit} type="submit" value="Submit" />
          </div>
        );
    }
    else{
      return(
        <p>Nije Contact Us</p>
      );
    }
  }
}

export default Modal;






/*

*/