import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
    <h1>About Me</h1>
    <p>hey I am a developer</p>
    <img src={image} alt="I made this"/>
  </div>);
}

export default About;
