import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatAlt } from 'react-icons/hi';

import './Contact.css';

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="c-container flexCenter paddings innerWidth">
        {/* LEFT SIDE */}
        <div className="c-left flexColStart">
          <span className="orangeText">Out Contact</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We beleive a good blace
            to live can make your life better
          </span>

          <div className="contactModes flexColStart">
            {/* First row */}
            <div className="row flexStart">
              {/* First mode */}
              <div className="mode flexColStart">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="btn flexCenter">Call Now</div>
              </div>

              {/* Second mode */}
              <div className="mode flexColStart">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="btn flexCenter">Chat Now</div>
              </div>
            </div>

            {/* Second row */}
            <div className="row flexStart">
              {/* Third mode */}
              <div className="mode flexColStart">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="btn flexCenter">Video Call Now</div>
              </div>

              {/* Fourth mode */}
              <div className="mode flexColStart">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <HiChatAlt size={25} />
                  </div>
                  <div className="detail flexColStart">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="btn flexCenter">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="c-right">
          <div className="image-container">
            <img src="../images/contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
