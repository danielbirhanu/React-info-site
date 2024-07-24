import React from "react";
import ReactIcon from "../assets/React-icon.svg";

export default function Navbar(){
    return(
        <nav>
            <img src={ReactIcon} alt="React Icon" width="40px"/>
            <h3>React Facts</h3>
            <h4>React Course Project-1</h4>
        </nav>
    );
}