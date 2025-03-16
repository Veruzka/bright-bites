import React from "react";
import { Navigation } from "framer-components";

const Etsy: React.FC = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
        {/* Side navigation */}
        <div style={{ width: "250px", flexShrink: 0 }}>
            <Navigation locale="en"/>
        </div>

        {/* Main content */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
        <h1>Welcome to your Etsy insights bites</h1>
        <p>This is the Etsy page.</p>
        </div>
    </div>

    );
};

export default Etsy;