import React from "react";
import SideNavigation from "../stories/BB_SideNavigation";
import Hero from "../stories/Framer_Hero";

const Home: React.FC = () => {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
            {/* Side navigation */}
            <div style={{ width: "100px", flexShrink: 0 }}>
                <SideNavigation />
            </div>

            {/* Main content (Hero flush with SideNav) */}
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", width: "100%" }}>
                <Hero />
                <div style={{ flexGrow: 1, padding: "20px" }}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>This is the homepage.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
