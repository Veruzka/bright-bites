import React from 'react';
import Card from './BB_Card_DEPRECATED';
import './bb_card.css';

export default {
    title: "Components/Card",
    component: Card,
};

export const Default = () => (
    <Card 
        avatarURL='https://via.placeholder.com/48'
        platformName='Shopify'
        imageURL='https://via.placeholder.com/200x100'
        title='San Francisco Ceramics'
        description='Hand crafter ceramics with function and sustainability in mind'
    />
    

);


