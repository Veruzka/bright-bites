import React from 'react';
import DividerComponent from '../framer/divider';
import "../framer/styles.css";

interface DividerProps {
    websiteName: string;
    style?: React.CSSProperties;
}

const TypedDividerComponent = DividerComponent as React.FC<DividerProps> & {
    Responsive: React.FC<DividerProps>;
};

export default function Divider() {
    return (
        <div className="flex flex-col">
            <TypedDividerComponent.Responsive 
                websiteName="example" 
            />
        </div>
    );
}