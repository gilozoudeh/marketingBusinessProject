import heroImage from "../images/landingpage.jpg";
import { BsClipboard2DataFill } from "react-icons/bs";
import { everythingData } from "../../data.js";

import { services } from "../../data.js";
import Ready from "./Ready.jsx";
const Home = () => {
  return (
    <div>
      <section>
        <div className="herosection_container">
          <div className="herocontent_one">
            <h1>Scaling your brand presence</h1>
            <p className="hero_paragraph">
              Empower your marketing team with a centralized platform designed
              to ensure brand consistency, accelerate campaign deployment, and
              provide real-time insights across all channels.
            </p>
            <div className="herocontent_btn">
              <button id="highlight">Get Started</button>
              <button>Book a demo</button>
            </div>
          </div>
          <div className="herocontent_two">
            <img src={heroImage} />
          </div>
        </div>
      </section> 

      {/* our services section */}

      <div className="services-container">
        {services.map((service) => (
          <p key={service.id} className="services_list">
            {service.name}
          </p>
        ))}
      </div>

      {/* Everything you need  */}
      <section className="everyThing_section">
        <h2 className="everyThing_heading">Everything you need to grow</h2>
        <p className="everyThing_paragraph">
          A comprehensive suite of tools built specifically for modern marketing
          teams <br /> focused on scaling impact without losing control.
        </p>
        <div className="everything_container">
          {everythingData.map((list) => {
            return (
              <div key={list.id} className="list_card">
                <BsClipboard2DataFill />
                <h2>{list.serviceName}</h2>
                <p>{list.Text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Ready />
    </div>
  );
};

export default Home;
