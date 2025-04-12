import React, { Suspense } from "react";
import SideNavigation from "../stories/BB_SideNavigation";
//import Card from "../framer/card";
//import Divider from "../framer/divider";
import Spacing from "../stories/BB_Spacing";
import { ItemsList, ListItem } from "stories/BB_ItemsList";
//import Sidebar from "../framer/sidebar";
//import ItemsListFramerComponent from "../framer/items-list";
//import { Sidebar, Card, ItemsListFramerComponent } from "framer-components";
import Divider from "stories/BB_Divider";
import Card from "stories/BB_Card";
import previewImg from '../stories/assets/shopify_ceramics.jpg';
import Chip from "stories/BB_Chip";
import Input from "stories/BB_Input";
import Search from "stories/BB_Search";

const Hero = React.lazy(() => import("../stories/BB_Hero"));
//const Divider = React.lazy(() => import("framer-components/dist/divider"));
//const CardFramer = React.lazy(() => import("framer-components/dist/card"));
//const ItemsListFramerComponent = React.lazy(() => import("framer-components/dist/items-list"));
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
                    {/*<Suspense fallback={<div>Loading...</div>}>*/}
                    <Divider/>
                    {/*</Suspense>*/}
                    <Spacing size="56"/>
                    <p>This is the homepage.</p>
                    <ItemsList title="What's working" items={sampleItems}/>
                    <Spacing size={"40"}/>
                    <Card
                        avatarURL='https://cdn.simpleicons.org/shopify'
                        platformName='Shopify'
                        imageURL={previewImg}
                        title='San Francisco Ceramics'
                        description='Hand crafted ceramics with function and sustainability in mind'
                    />
                    <Spacing size={"40"}/>
                    <Chip label="why did my sales for down in the last 2 days" href="#"/>
                    <Spacing size={"40"}/>
                    <Input />

                </div>
            </div>

            {/* Right Sidebar (Search Feature) */}
            <div style={{ display: "flex", height: "100vh" }}>
                {/*<div style={{ flex: 1, height: "100%" }}>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Sidebar locale="en" />
                    </Suspense>
                </div>*/}

                <div style={{  width: "350px", flexShrink: 0 }}>
                    <Search />
                </div>
            </div>

        </div>
    );
};

const sampleItems: ListItem[] = [
    {icon: "check", text: "List of things that are currently working with this web store"},
    {icon: "check", text: "List of things that are currently working with this web store"},
    {icon: "check", text: "List of things that are currently working with this web store"}
];

export default Home;
