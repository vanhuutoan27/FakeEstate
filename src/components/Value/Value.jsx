import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import data from '../../utils/accordion';
import './Value.css';

function Value() {
  return (
    <section className="v-wrapper">
      <div className="v-container flexCenter paddings innerWidth">
        {/* LEFT SIDE */}
        <div className="v-left">
          <div className="image-container">
            <img src="../images/value.png" alt="value" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="v-right flexColStart">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion">
            {data.map((item, index) => {
              const [className, setClassName] = useState(null);

              return (
                <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton flexCenter">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? setClassName('expanded') : setClassName('collapsed')
                        }
                      </AccordionItemState>
                      <div className="icon flexCenter">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="icon flexCenter">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
