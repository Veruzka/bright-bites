import React from 'react';
//import '../../framer/styles.css';
// This file imported below is generated when you run `npm run framer`
import IconButtonFramerComponent from '../framer/icon-buttons';
import "../framer/styles.css";

// Define props for the ChipFramerComponent if available
interface IconButtonFramerProps {
    websiteName: string;
    style?: React.CSSProperties;
}

// Ensure ChipFramerComponent has proper typing
const TypedIconButtonFramerComponent = IconButtonFramerComponent as React.FC<IconButtonFramerProps> & {
    Responsive: React.FC<IconButtonFramerProps>;
};

export default function ChipComponent() {
    return (
        <div className="flex flex-col">
            <TypedIconButtonFramerComponent.Responsive 
                websiteName="example" 
            />
        </div>
    );
}