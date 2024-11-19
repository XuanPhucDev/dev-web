import React from 'react';
import "./ThumbPlan.css";
const ThumbPlan = (props) => {
    return (
        <div className='thumb-plan flex flex-column'>
            <h4>{props.name}</h4>
              <p id='detail-plan'>
                {props.targetAudience}
              </p>
              <h3>{props.price}</h3>
             
              <div className="services-plan">
                <h5>Gói dịch vụ:</h5>
                <ul>
                  {props.features && props.features.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
              <p>
                {props.content}
              </p>
              <div className="view-more">
                <button>
                  Choose Your Plan <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
        </div>
    );
};

export default ThumbPlan;