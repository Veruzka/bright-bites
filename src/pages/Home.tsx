import React, { Suspense } from "react";
import SideNavigation from "../stories/BB_SideNavigation";
//import Card from "../framer/card";
//import Divider from "../framer/divider";
import Spacing from "../stories/BB_Spacing";
//import Sidebar from "../framer/sidebar";
//import ItemsListFramerComponent from "../framer/items-list";
//import { Sidebar, Card, ItemsListFramerComponent } from "framer-components";

const Hero = React.lazy(() => import("../stories/BB_Hero"));
const Divider = React.lazy(() => import("framer-components/dist/divider"));
const Card = React.lazy(() => import("framer-components/dist/card"));
const ItemsListFramerComponent = React.lazy(() => import("framer-components/dist/items-list"));
const Sidebar = React.lazy(() => import("framer-components/dist/sidebar"));

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
                    <Suspense fallback={<div>Loading...</div>}>
                    <Divider locale="en"/>
                    </Suspense>
                    <Spacing size="56"/>
                    <p>This is the homepage.</p>
                    <ItemsListFramerComponent locale="en"/>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Card locale="en"/>
                    </Suspense>
                </div>
            </div>

            {/* Right Sidebar (Search Feature) */}
            <div >
            <Suspense fallback={<div>Loading...</div>}>
                <Sidebar locale="en"/>
                </Suspense>
            </div>
        </div>

        



    );
};

export default Home;
