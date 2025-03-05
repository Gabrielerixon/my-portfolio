import React from 'react';
import { Link } from 'react-router-dom';
import './Day2Checkout.css';
import jordanShoe from '../assets/jordan-shoe.webp';

const Day2Checkout = () => {
  return (
    <div className="day2-checkout-wrapper">
      <div className="day2-checkout-container">
        <div className="checkout-form-section">
          <div className="checkout-form">
            <div className="form-group">
              <label>Name on Card</label>
              <input type="text" placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            
            <div className="split-fields">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Billing Address</label>
              <input type="text" placeholder="123 Apple St" />
            </div>
            
            <button className="confirm-btn">Confirm Payment</button>
          </div>
        </div>
        
        <div className="checkout-product-section">
          <img
            src={jordanShoe}
            alt="Air Jordan Mid"
            className="checkout-product-image"
          />
          <div className="checkout-product-details">
            <h2>Air Jordan 1 Mid</h2>
            <p>Chicago Colorway</p>
            <p>$229.00</p>
          </div>
        </div>
      </div>
      
      <Link to="/dailyui" className="back-button">
        Back to Challengeboard
      </Link>
    </div>
  );
};

export default Day2Checkout;