import React from 'react';
//import NavigationComponent from '../../framer/navigation';
import NavigationComponent from "../framer/navigation";
import "../framer/styles.css";

interface NavigationProps {
    websiteName: string;
    style?: React.CSSProperties;
}

const TypedNavigationComponent = NavigationComponent as React.FC<NavigationProps> & {
    Responsive: React.FC<NavigationProps>;
};

export default function Navigation() {
    return (
        <div className="flex flex-col">
            <TypedNavigationComponent.Responsive 
                websiteName="example" 
            />
        </div>
    );
}