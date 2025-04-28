import React from "react";
import InfoItem from "./BB_InfoItem";
import "./bb_infobar.css";

interface InfoBarItem {
  icon: React.ElementType; // Phosphor icon
  text: string;
}

interface InfoBarProps {
  items: InfoBarItem[]; // ✅ Array of info passed here
}

const InfoBar: React.FC<InfoBarProps> = ({ items }) => {
  return (
    <div className="info-bar">
      {items.map((item, index) => (
        <InfoItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};

export default InfoBar;