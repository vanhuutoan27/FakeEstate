import React from 'react';

import './GetStarted.css';

function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="g-container paddings innerWidth">
        <div className="inner-container flexCenter">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <span>
            <button className="btn">
              <a href="mailto:vhtoan27@gmail.com">Get Started</a>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
