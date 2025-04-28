import React from "react";
import "../styles/typography.css";
import './bb_infoitem.css';

interface InfoItemProps {
  icon: React.ElementType; // Phosphor icon component
  text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, text }) => {
  return (
    <div className="info-item">
      <Icon size={20} />
      <p className="small caption">{text}</p>
    </div>
  );
};

export default InfoItem;