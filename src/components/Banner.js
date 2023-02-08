import React from "react";

import { TypeAnimation } from "react-type-animation";
import Image from "../assets/avatar.svg";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>
            <h1>
              BEN <span>AIDEN</span>
            </h1>
          </div>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a</span>
            <TypeAnimation
              sequence={["Developer", 2000, "Designer", 2000, "Youtuber", 2000]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            gravida at neque in viverra. Ut et imperdiet velit. Praesent posuere
            semper est, aliquam placerat est.
          </p>
          <div>
            <button>Contact me</button>
            <a href="#">My Portfolio</a>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
