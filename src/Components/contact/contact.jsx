import React from 'react'
import ReactWhatsapp from 'react-whatsapp'
import './contact_style.css'

export default function Contact() {
  return (
    <div>
      <section id='contact' className="contact">
        <div className="section-title">
          <div className="container">
            <h2>contact</h2>
            <p>Contact Us & Get Your Kids on Quran Learning Track!
              The Original Online Quran Tutoring Service.</p>
            <div className="row mt-4">
              <div class="form-container">
                <div class="left-container">
                  <div class="left-inner-container">
                    <h2>Call Us</h2>
                    <p>Please call us on the following numbers,simply want to connect.</p>
                    <br></br>
                    <strong>PAK: +9218 2805567 (Call/SMS)</strong><br /><br />
                    {/* <strong>WhatsApp: +9218 2805567 (Call/SMS)</strong> */}
                    <ReactWhatsapp number="+92 303 8081844" className="Reactwhatshere" message="I want to book an appointment" >
                      <button className=" btn button-md dark-button js-scroll-trigger footerbtnt" > <i class="fab fa-whatsapp "></i> Send a Whatsapp Message</button>
                    </ReactWhatsapp>
                  </div>
                </div>
                {/* <div class="right-container">
                <div class="right-inner-container">
                  <form action="#">
                    <h2 class="sm-view">Let's Chat</h2>
                    <div class="social-container">
                      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <input type="text" placeholder="Name *" />
                    <input type="email" placeholder="Email *" />
                    <input type="text" placeholder="Company" />
                    <input type="phone" placeholder="Phone" />
                    <textarea rows="4" placeholder="Message"></textarea>
                    <button>Submit</button>
                  </form>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
