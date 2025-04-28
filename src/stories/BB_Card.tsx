import React from "react";
import "../styles/typography.css";
import './bb_card.css';
import Divider from './BB_Divider';
import Spacing from "./BB_Spacing";
import { Link } from "react-router-dom";

export interface CardProps {
    avatarURL?: string; 
    platformName?: string;
    imageURL: string;
    title: string;
    description: string;
    linkTo: string;
    in?: boolean;
};


export const Card: React.FC<CardProps> = ({
    avatarURL,
    platformName,
    imageURL,
    title,
    description,
    linkTo,
}) => {
    const showHeader = avatarURL || platformName;

  return (
    <Link to={linkTo} className="card-container">
        {showHeader && (
        <div className="card-header">
          {avatarURL && (
            <div
              className="card-avatar"
              style={{ backgroundImage: `url(${avatarURL})` }}
            />
          )}
          {platformName && <p className="small caption">in {platformName}</p>}
        </div>
      )}

    <div>
        <Spacing size={"16"}/>
    </div>
    <div className="card-body">
        <div className="card-preview" style={{backgroundImage: `url(${imageURL})`}}/>
        <div className="card-copy">
            <h2>{title}</h2>
            <Spacing size={"8"}/>
            <p className="summary-home">{description}</p>
        </div>
    </div>
    <Spacing size={"24"}/>
    <Divider/>
    </Link>
  );

};


export default Card;



