import React from 'react';
import Card from './BB_Card';
import './bb_card.css';
import previewImg from './assets/shopify_ceramics.jpg';

export default {
    title: "Components/Card",
    component: Card,
};

export const Default = () => (
    <Card 
        avatarURL='https://cdn.simpleicons.org/shopify'
        platformName='Shopify'
        imageURL={previewImg}
        title='San Francisco Ceramics'
        description='Hand crafted ceramics with function and sustainability in mind'
    />
    

);