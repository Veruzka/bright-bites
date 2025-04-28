import InfoBar from './BB_InfoBar';
import './bb_infobar.css';
import { CurrencyDollar, Clock } from "phosphor-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "Components/Info Bar",
    component: InfoBar,
};

export const Default = () => {
    <InfoBar
        items={[
        { icon: CurrencyDollar, text: "Weekly sales: $352.00" },
        { icon: Clock, text: "Last updated: Nov 1, 2024" },
        ]}
    />
};