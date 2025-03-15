import { fn } from '@storybook/test';
import Hero from './BB_Hero';
import './bb_hero.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "Components/Hero",
    component: Hero,
};

export const Default = () => <Hero/>;