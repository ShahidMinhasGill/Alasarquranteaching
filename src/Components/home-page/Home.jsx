import React from "react";
import "./Home_style.css";
import { BsPlayCircle } from "react-icons/bs";

import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      {/* <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div id="home">

          </div>
          <div>
            <img src="mainphoto.jpg" alt="" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
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
