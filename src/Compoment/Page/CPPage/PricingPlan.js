import React from 'react';
import HeadingPage from '../../Global/Title/HeadingPage';
import ListPricingPlan from '../Services/ListPricingPlan';
const PricingPlan = () => {
    return (
        <div className='pricing-plan'>
            <HeadingPage title="Pricing Plans"></HeadingPage>
            <ListPricingPlan></ListPricingPlan>
        </div>
    );
};

export default PricingPlan;