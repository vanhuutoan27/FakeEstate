import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

import './Hero.css';

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container flexCenter paddings innerWidth">
        {/* LEFT SIDE */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="hero-desc flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you Search
            </span>
          </div>

          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className="stats flexCenter">
            <div className="stat flexColCenter">
              <span>
                <CountUp start={8800} end={9000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp start={1950} end={2000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp end={27} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="../public/images/hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
