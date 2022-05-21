import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/home-page/Home';
import Top_header from './Components/top-header/Top_header';
import MyHeader from './Components/header/Header';
import AboutUs from './Components/about-us/about_us';
import Services from './Components/services/service'
import Portfolio from './Components/portfolio/portfolio'
import Team from './Components/team/team'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'

function App() {
  return (
    <div className="App">
      {/* <Top_header/> */}
      <MyHeader />
      <Home />
      <AboutUs />
      <Services />
      {/* <Portfolio /> */}
      <Team />
      <Contact />
      <Footer />



    </div>
  );
}

export default App;
