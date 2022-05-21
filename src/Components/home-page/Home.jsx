import React from "react";
import "./Home_style.css";
import { BsPlayCircle } from "react-icons/bs";

export default function Home() {
  return (
    <div>

      <section id="home" className="d-flex align-items-center ">
        <div className="container">
          <div className="row ">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h1 className="text-white fw-bolder">
                Learn Quran Online
              </h1>
              <h4 className="text-start text-white">WITH</h4>
              <h2 className="text_home">
                TAJWEED RULES
              </h2>

            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
