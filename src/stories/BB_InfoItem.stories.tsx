import { fn } from '@storybook/test';
import InfoItem from './BB_InfoItem';
import './bb_infoitem.css';
import { CurrencyDollar, Clock } from "phosphor-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "Components/Info Item",
    component: InfoItem,
};

export const Default = () => <InfoItem icon={CurrencyDollar} text="Weekly sales: $352.00" />;