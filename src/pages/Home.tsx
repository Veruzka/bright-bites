import React, { Suspense } from "react";
import SideNavigation from "../stories/BB_SideNavigation";
import Card from "../framer/card";
import Divider from "../framer/divider";
import Spacing from "../stories/BB_Spacing";
import Sidebar from "../framer/sidebar";
import ItemsListFramerComponent from "../framer/items-list";

const Hero = React.lazy(() => import("../stories/BB_Hero"));

const Home: React.FC = () => {

    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
            {/* Side navigation */}
            <div style={{ width: "100px", flexShrink: 0 }}>
                <SideNavigation />
            </div>

            {/* Main content (Hero flush with SideNav) */}
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", width: "100%", overflow: "auto" }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Hero />
                </Suspense>
                <div style={{ flexGrow: 1, padding: "24px 80px" }}>
                    <h1>Welcome to My Portfolio</h1>
                    <Divider/>
                    <Spacing size="56"/>
                    <p>This is the homepage.</p>
                    <ItemsListFramerComponent/>
                    <Card/>
                </div>
            </div>

            {/* Right Sidebar (Search Feature) */}
            <div >
                <Sidebar/>
            </div>
        </div>

        



    );
};

export default Home;
