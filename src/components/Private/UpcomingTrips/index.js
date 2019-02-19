import React from "react";
import styles from "./styles.module.css";
import { Link } from "gatsby";
import { TripItem, TripItemHeading } from "../..";
import raftingPhoto from "./images/rafting 4x3.jpg";
import TripDescription from "../../TripDescription";

export default () => (
    <div className = {styles.UpComingTrips}>
        <h2>Upcoming trips:</h2>

        <Link to ="/raftnig">
            <TripItem>
                <img src={raftingPhoto} alt="Rafting" width="100%" />
                <TripItemHeading>Rafting</TripItemHeading>
                <TripDescription>
                    <strong>Date: </strong>15.6.2019.<br></br>
                    <strong>Time: </strong>10:00h<br></br>
                    <strong>Location: </strong>Omiš<br></br>
                    <strong>Bring with you: </strong>swimsuits, bottle of juice or water<br></br>
                </TripDescription>
            </TripItem>
        </Link>
    </div>
);