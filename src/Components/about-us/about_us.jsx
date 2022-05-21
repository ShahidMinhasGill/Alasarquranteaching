import React from "react";
import "./about_us.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion, Card, Button } from "react-bootstrap";
export default function AboutUs() {
  AOS.init();
  AOS.refresh();
  return (
    <div>
      <section id="about" className="about">
        <div className="container aos-init aos-animate">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>About Us</h2>
          </div>
          <div
            className="row content"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-6">
              <p>
                Alassar Online Quran And Hadith Acadmey provides the learners with proper Tajweed guided Holy Quran recitation in online one-to-one live Quran classes with experienced Quran tutors. These tutors not only provide you instructions about how to do it but also help you encounter the problems you face during your learning period.
              </p>

            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Recite the Holy Quran with proper Tajweed rules even if you are not able to recognize Arabic alphabets.
                Memorize the Holy Quran and become a Hafiz-ul-Quran in the guidance of an experienced Qari without needing to go out of your accommodation.
                Not only learn to recite the Quran properly, but being able to understand it in your own language.
                Bring yourself one step closer to Islam.
              </p>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          id="mainId"
          className="main bg-color container-fluid aos-init aos-animate"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="row">
            <div className="col-lg-6 d-flex  justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  <strong>Can't Drive Kids to the Mosque? Quran Reading can Help.</strong>{" "}
                </h3>
                <p>
                  “Living in the middle of Arkansas and having no tutor of Qur'an, a desperate condition for me. My friend told me about QuranReading.com, where there is no age limit for students. I have started taking Quran classes three days a week. Now, my two sons are also students of their tutors. I will highly recommend you all to try their Quran Learning program for once.”
                </p>
              </div>

            </div>
            <div
              class=" why-s col-lg-4 mx-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <img src="quranreading.png" className="quran-img" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div
        className=" main container-fluid aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="row">
          <div
            class="col-lg-6 align-items-stretch 
            order-1 order-lg-2 img aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img src="quran.png" className="quran-img" ></img>
          </div>
          <div
            class="col-lg-6 align-items-stretch 
            order-1 order-lg-2 img aos-init aos-animate "

          >
            <div className="content">
              <h3>
                <strong>
                  Expert Tutors</strong>
              </h3>
              <p>
                Our expert tutors can teach the Holy Quran with Tajweed and translation.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
