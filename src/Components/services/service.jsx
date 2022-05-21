import React, { useEffect } from "react";
import "./services_style.css";
import { FaGlobeAsia } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {

  AOS.init();
  AOS.refresh();


  return (
    <div>

      <section id="services" className="services">
        <div className="container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="section-title">
            <h2>Services</h2>
            <p >
              The online Quran Tutoring services of alassarquranteaching.netlify are benefitting hundred of students all over the world including USA, Canada, UK, Australia, Netherlands, Ireland and many other countries.
              The praises and recommendations of the students who learn here, the main source of our advertisement, represent the trust they put in us as they refer QuanTeaching.com to their friends as well as relatives.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="icon-box">
                {/* <div className="icon">
                  <FaGlobeAsia></FaGlobeAsia>
                </div> */}
                <h4>
                  <a>Online Quran Reading</a>
                </h4>
                <p>
                  The very basic course for learning to read Holy Quran with proper tajweed is here. The students who are not able to identify Quranic alphabets will be taught in the ways they will learn accurately and quickly. On the completion of this course you will amazingly find yourself reading Quran with proper tajweed and accent. In addition to this, basic Islamic education will also be provided like Duas, Prayers, six Kalimas etc.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            // data-aos-anchor-placement="top-center"
            >
              <div className="icon-box">
                {/* <div className="icon">
                  <FaGlobeAsia></FaGlobeAsia>
                </div> */}
                <h4>
                  <a>Memorize Quran Online</a>
                </h4>
                <p>
                  Memorizing the Holy Quran simply means learning it by heart. It is one of the miracles of Holy Quran that it is the only book in the world that can be memorized word to word even by children of very young age. At the time of Holy Prophet (peace be upon him), writing things for the purpose of storing them was not usually practiced, hence people used to memorize whatever knowledge they wanted to preserve.Even today when matters of preservation are no longer a difficult aspect due to advanced technology, memorizing Holy Quran is still the Honor that Allah grants to whomever he chooses. While it is in the hands of Allah who he chooses as the safe keeper of His Holy book, we are here to provide you the guidance and help you need to achieve this sacred honor
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 d-flex align-items-stretch mt-5"

            >
              <div className="icon-box">
                <h4>
                  <a>Online Quran Translation</a>
                </h4>
                <p>
                  This course is designed for those who already know how to read Quran but yearn to learn the meanings hidden in the unknown language. If you don’t know how to read Quran, then you should take Quran Reading with Tajweed course first before proceeding to this one. The most inspiring and fascinating aspect in this course is learning in a manner you follow each word and its meaning leading to the collective translation of each verse. This method was devised by famous Islamic scholars to help students understand the Holy Quran in the language chosen by Allah Subhana wa Tallah. It doesn’t matter what your native language is, once you register for this course and start learning you will gradually be delighted to find yourself actually understanding what you have read all your life but had no idea how to interpret it without the help of a translation guide.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 d-flex align-items-stretch mt-5"

            >
              <div className="icon-box">
                <h4>
                  <a>Advance Tajweed Learning Course</a>
                </h4>
                <p>
                  Tajweed rules means to recite every letter of the Quran correctly from its makhraj with all of its qualities. The importance of tajweed can't be denied as reciting the Quran without tajweed will not only effect the beauty of the Quran but sometimes it can change the meaning of the Quran. For example: The word Qalb means ``heart``. If instead of Qaaf, Kaaf is read the meaning changes to ``dog``. The word ``Rahim`` used for Allah, means 'very merciful'. If instead of (ح (letter (ه (is read the meaning changes to `` thirsty camel``.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container">
          <div className="row" >
            <div className="col-lg-9 text-center text-lg-start"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h3>Aim of this</h3>
              <p>Alassarquranteaching.netlify does not accept any donations. It runs on a small fee we receive from the students. In order for Quran Academy to provide a high quality environment and an appropriate program for children and adult we must remain financially viable, while ensuring fee levels are at an affordable level for families.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {/* <a className="cta-btn align-middle">
                Call To Action
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
