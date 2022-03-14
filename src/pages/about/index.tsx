import AboutUs from '@components/About/AboutUs';
import OurFeatures from '@components/About/OurFeatures';
import Clients from '@components/About/Clients'
import React from 'react';
import Brands from '@components/About/Brands';

export default function About(){
    return (
        <>
        <AboutUs />
        <OurFeatures />
        <Clients />
        <Brands />
        </>
    )
}