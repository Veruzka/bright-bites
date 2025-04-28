import React from "react";
import "./bb_hero.css";
import "../styles/typography.css";
import Button from "./BB_Button";
import Spacing from "./BB_Spacing";

const Hero: React.FC = () => {
  return (
    <div className="hero-main">
      <h1 className="bold">Web Stores Connected</h1>
      <Spacing size={"16"}/>
      <p className="small">This is your list of web stores connected and ready for snacking!</p>
      <Spacing size="24"></Spacing>
      <Button primary={false} size='medium' label="Add new" onClick={() => console.log("Button clicked")}/>
    </div>
  );
};

export default Hero;