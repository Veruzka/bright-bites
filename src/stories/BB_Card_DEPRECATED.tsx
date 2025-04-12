import React from "react";
import "../styles/typography.css";
import Spacing from "./BB_Spacing";
import './bb_card.css';

export interface CardProps {
    avatarURL: string; 
    platformName: string;
    imageURL: string;
    title: string;
    description: string;
};

export const BB_Card: React.FC<CardProps> = ({
    avatarURL,
    platformName,
    imageURL,
    title,
    description,
}) => {
    return(
        <a className="card-container" style={{ border: "1px solid red" }}>
            <div className="card-header">
                <div className="card-avatar" style={{ backgroundImage: `url(${avatarURL})` }}/>
                <p className="small">in {platformName}</p>
            </div>
            <Spacing size="16"/>
            <div className="card-body">
                <div className="card-preview" style={{backgroundImage: `url(${imageURL})`}}/>
                <div className="card-copy">
                    <h2>{title}</h2>
                    <Spacing size="8"/>
                    <p className="summary">{description}</p>
                </div>
            </div>
            <Spacing size="16"/>
        </a>

    );
};

export default BB_Card;



