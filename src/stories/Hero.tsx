import React from 'react';
import HeroComponent from '../framer/hero';
import "../framer/styles.css";

interface HeroProps {
    websiteName: string;
    style?: React.CSSProperties;
}

const TypedHeroComponent = HeroComponent as React.FC<HeroProps> & {
    Responsive: React.FC<HeroProps>;
};

export default function Hero() {
    return (
        <div className="flex flex-col">
            <TypedHeroComponent.Responsive 
                websiteName="example" 
            />
        </div>
    );
}