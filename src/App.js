import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/home-page/Home';
import MyHeader from './Components/header/Header';
import AboutUs from './Components/about-us/about_us';
import Services from './Components/services/service'
import Team from './Components/team/team'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'
import ReactWhatsapp from 'react-whatsapp';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">


      {/* <BrowserRouter> */}
      <ReactWhatsapp number="+92 3182805567"   >
        <span class="float" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </span>
      </ReactWhatsapp>
      <MyHeader />
      {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact-us' element={<Contact />} />

        </Routes> */}

      {/* </BrowserRouter> */}
      <Home />
      <AboutUs />
      <Services />
      <Team />
      <Contact />
      <Footer />



    </div>
  );
}

export default App;
