import React, { Suspense } from "react";
import SideNavigation from "../stories/BB_SideNavigation";
import Spacing from "../stories/BB_Spacing";
import Card from "stories/BB_Card";
import ImgHero from '../stories/assets/ceramics3D_shopifyHero.png';
import ImgWorking from '../stories/assets/imgWorking.png';
import ImgNotWorking from '../stories/assets/imgNotWorking.png';
import ImgImprovements from '../stories/assets/imgImprovements.png';
import Search from "stories/BB_Search";
import InfoBar from "stories/BB_InfoBar";
import ImgEtsy from '../stories/assets/ceramics3D_img8.png';
import etsyLogo from '../stories/assets/Etsy.svg';
import { Money, ClockClockwise } from "phosphor-react";

const Hero = React.lazy(() => import("../stories/BB_Hero"));
const Sidebar = React.lazy(() => import("framer-components/dist/sidebar"));

const Etsy: React.FC = () => {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
            {/* Side navigation */}
            <div style={{ width: "100px", flexShrink: 0 }}>
                <SideNavigation />
            </div>

            {/* Main content (Hero flush with SideNav) */}
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", width: "100%", overflow: "auto" }}>
                <div className="hero" style={{ ...styles.hero, backgroundImage: `url(${ImgHero})` }} />
                <InfoBar
                    items={[
                    { icon: Money, text: "Weekly sales: $352.00" },
                    { icon: ClockClockwise, text: "Last updated: Nov 1, 2024" },
                    ]}
                />
                <div style={{ flexGrow: 1, padding: "24px 80px" }}>
                    <Spacing size={"32"}/>
                    <div className="card-header">
                    <div className="page-avatar" style={{ backgroundImage: `url(https://cdn.simpleicons.org/shopify)` }}/>
                    <p className="small caption">in Shopify</p>
                    </div>
                    <Spacing size={"32"}/>
                    <div style={{ flexGrow: 1 }}>
                        <h1>San Francisco Ceramics</h1>
                        <Spacing size={"8"}/>
                        <p className="summary">Handcrafted ceramics with funcion and sustainability in mind</p>
                    </div>
                    <Spacing size={"64"}/>
                    <Card
                        imageURL={ImgWorking}
                        title="What's working"
                        description='Hand crafted ceramics with function and sustainability in mind'
                        linkTo="/Shopify"
                    />
                    <Spacing size={"80"}/>
                    <Card
                        imageURL={ImgNotWorking}
                        title="What's not working"
                        description='Etsy Storefront'
                        linkTo="/Etsy"
                    />
                    <Spacing size={"80"}/>
                    <Card
                        imageURL={ImgImprovements}
                        title='Weekly improvements'
                        description='Etsy Storefront'
                        linkTo="/Etsy"
                    />
                    <Spacing size={"96"}/>
                    <h3>See other webstores</h3>
                    <Spacing size={"24"}/>
                    <Card
                        avatarURL={etsyLogo}
                        platformName='Etsy'
                        imageURL={ImgEtsy}
                        title='Etsy Ceramics'
                        description='Etsy Storefront'
                        linkTo="/Etsy"
                    />
                </div>
            </div>

            {/* Right Sidebar (Search Feature) */}
            <div style={{ display: "flex", height: "100vh" }}>
                <div style={{  width: "350px", flexShrink: 0 }}>
                    <Search />
                </div>
            </div>

        </div>

    );
};

const styles = {
    hero: {
        flexShrink: 0,
        width: "100%",
        height: "400px", 
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
};

export default Etsy;