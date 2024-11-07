import React from 'react';
import About from './About';
import Banner from './Banner';
import Product from './Product';
import Timeline from './Timeline';
import "./Category.css";
import usePageTitle from '../../../Features/TitlePage';
import Partner from './Partner';
import Popular from './Popular';
import Vision from './Vision';
import Benefits from './Benefits';
const Category = () => {
    usePageTitle("Thiết kế website - Ông Xuân");
    return (
        <div className='category-marketing'>
            <Banner></Banner>
            <Partner></Partner>
            <About></About>
            <Popular></Popular>
            <Vision></Vision>
            <Benefits></Benefits>
            <Product></Product>
            <Timeline></Timeline>
        </div>
    );
};

export default Category;