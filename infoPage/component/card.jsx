import React from 'react';
import './card.css'; // External CSS file for styling
import img1 from './Imgs/img1.jpg';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={img1} alt="Book" className="card-img" />
                <div className="card-text">
                    <p>1. BestSeller Book Bootcamp - Write, Market & Publish Your Book - Lucknow</p>
                </div>
            </div>
            <div className="card">
                <img src={img1} alt="Event" className="card-img" />
                <div className="card-text">
                    <p>2. Saturday, March 18, 9.30PM</p>
                </div>
            </div>
            <div className="card">
                <img src={img1} alt="Online Event" className="card-img" />
                <div className="card-text">
                    <p>3. ONLINE EVENT - Attend anywhere</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
