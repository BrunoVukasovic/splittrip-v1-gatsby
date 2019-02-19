import React, { Component } from "react";
import styles from "./styles.module.css";

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
    console.log(props);
    console.log(props.children);
    console.log(props.heading);
  }
  
  handleClick(){
      console.log("klik!!!!");
      this.setState({ clicked: true});
  }

  render() {
    return(
      <div className={styles.NekiDiv}>
      
      <button onClick={this.handleClick} className={styles.Button}>{this.props.children}</button>

      <div className={this.state.clicked ? styles.ModalBlock : styles.ModalNone}>
        <div className={styles.ModalContent}>
          <p>neki tekst u modalu</p>

          <div>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit" />
</div>
        </div>
      </div>

      </div>
    );
  }
}

export default Button;

/*
export default ({ children }) => (
  <button className={styles.Button}>{children}</button>
);
*/
