import React from 'react';
//import '../../framer/styles.css';
// This file imported below is generated when you run `npm run framer`
import ChipFramerComponent from '../framer/chip';
import "../framer/styles.css";

// Define props for the ChipFramerComponent if available
interface ChipFramerProps {
    websiteName: string;
    style?: React.CSSProperties;
}

// Ensure ChipFramerComponent has proper typing
const TypedChipFramerComponent = ChipFramerComponent as React.FC<ChipFramerProps> & {
    Responsive: React.FC<ChipFramerProps>;
};

export default function ChipComponent() {
    return (
        <div className="flex flex-col">
            <TypedChipFramerComponent.Responsive 
                websiteName="example" 
            />
        </div>
    );
}

/*//JX code which works
    // this file imported below is generated when you run `npm run framer`
    import ChipFramerComponent from '../../framer/chip'
    
    export default function App() {
        return (
            <div className='flex flex-col'>
                <ChipFramerComponent
                    exampleFramerVariable='example'
                    style={{ width: '100%' }}
                />
                {//use .Responsive for components with breakpoints }
                <ChipFramerComponent.Responsive
                    exampleFramerVariable='example' 
                />
            </div>
        );
    };*/

