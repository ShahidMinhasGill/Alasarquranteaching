import React from "react";
import "./team_style.css";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Team() {
  return (
    <div>

      <section id="monthly-fee" className="pricing ">
        <div className="section-title">
          <div className="container">
            <h2>Fee Policy</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className="row">
              <div
                className="col-lg-4 mt-5"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="box">
                  <h3>Free trial</h3>
                  <h4>
                    <sup>$</sup>0<span>per week</span>
                  </h4>

                  <p className="text-start">This is 100% FREE trial and there are no conditions attached. You can continue after the free trial. You can discontinue the service if for some reason this service does not work for you and/or for your child after the free trial.</p>

                  <span className="text-white">ff</span>
                  <span className="text-white">ff</span>
                </div>
              </div>
              <div
                className="col-lg-4 mt-5"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="box">
                  <h3>Plan A</h3>
                  <h4>
                    <sup>$</sup>20
                    <span>per month</span>
                  </h4>
                  8 Classes/Monthly
                  <ul>
                    <li> DURATION: 30 MIN</li>
                    <li>One To One Class</li>
                    <li>Lecture - Live</li>

                  </ul>

                </div>
              </div>
              <div
                className="col-lg-4 mt-5"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="box">
                  <h3>Plan C</h3>
                  <h4>
                    <sup>$</sup>30
                    <span>per month</span>
                  </h4>
                  12 Classes/Monthly
                  <ul>
                    <li>DURATION: 30 MIN</li>
                    <li>One To One Class</li>
                    <li>Lecture - Live</li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
