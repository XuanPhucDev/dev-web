import React from 'react';
import HeadingPage from '../../Global/Title/HeadingPage';
import ListPricingPlan from '../Services/ListPricingPlan';
import usePageTitle from '../../../Features/TitlePage';
const PricingPlan = () => {
  usePageTitle(`Gói đăng ký - D.A.C`);

    return (
        <div className='pricing-plan'>
            <HeadingPage title="Pricing Plans"></HeadingPage>
            <ListPricingPlan></ListPricingPlan>
        </div>
    );
};

export default PricingPlan;