import React from 'react';
import './bb_chip.css';
import "../styles/typography.css";

export interface BB_ChipProps {
    label?: string;
    href?: string;
};

export const Chip: React.FC<BB_ChipProps> = ({label, href = "#"}) => {
    return (
        <a className = "chip" href={href}>
            <p className='small'>{label}</p>
        </a>
    );
};

export default Chip;