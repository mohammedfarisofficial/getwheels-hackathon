import "./App.scss";
import LanguageCountry from "./components/LanguageCountry/LanguageCountry.jsx";
import Navbar from "./components/Navbar/Navbar";
import heartIcon from "./assets/icons/heart.svg";
import arrowRight from "./assets/icons/arrow-right.svg";
import swiperIcon from "./assets/icons/swiper.png";
//slider imgs
import slider1 from "./assets/images/slider/1.jpg";
import slider2 from "./assets/images/slider/2.jpg";
import slider3 from "./assets/images/slider/3.jpg";
//menu images
import menu1 from "./assets/images/menu/1.jpg";
import menu2 from "./assets/images/menu/2.jpg";
import menu3 from "./assets/images/menu/3.jpg";
//page switch
import pageSwitchIcons from "./assets/icons/next-btn.svg";
import Footer from "./components/Footer/Footer";
// car company logos
import carLogo1 from "./assets/logo/companies/1.png";
import carLogo2 from "./assets/logo/companies/2.png";
import carLogo3 from "./assets/logo/companies/3.png";
import carLogo4 from "./assets/logo/companies/4.png";
import carLogo5 from "./assets/logo/companies/5.png";
import carLogo6 from "./assets/logo/companies/6.png";
import carLogo7 from "./assets/logo/companies/7.png";

function App() {
  const menuItems = [
    {
      name: "Car 1",
      img: menu1,
    },
    {
      name: "Car 1",
      img: menu2,
    },
    {
      name: "Car 1",
      img: menu3,
    },
    {
      name: "Car 1",
      img: menu1,
    },
    {
      name: "Car 1",
      img: menu2,
    },
  ];
  return (
    <div className="home-container">
      <div className="home-top-container">
        <LanguageCountry />
        <Navbar />
        <div className="action-container">
          <h2>NISSAN R34 GTR</h2>
          <div className="action-inner-container">
            <div className="action-btn-left">
              <h3>DISCOVER</h3>
              <img src={arrowRight} alt="" />
            </div>
            <div className="action-btn-right">
              <img src={heartIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="swiper-container">
          <img src={swiperIcon} alt="" />
          <img src={swiperIcon} alt="" />
        </div>
        <div className="slider-container">
          <img src={slider1} alt="" />
          <img src={slider2} alt="" />
          <img src={slider3} alt="" />
        </div>
      </div>
      <div className="home-explore-container">
        <div className="title-container">
          <h2>EXPLORE NEW CARS</h2>
          <div className="title-line" />
        </div>
        <div className="page-switch">
          <div className="page-switch-inner">
            <img src={pageSwitchIcons} alt="" />
            <img className="page-switch-right" src={pageSwitchIcons} alt="" />
          </div>
        </div>
        <div className="explore-menu-container">
          <div className="explore-menu-inner">
            {menuItems.map((item) => (
              <div className="menu-items">
                <img src={item.img} alt="" />
                <div className="menu-items-text-container">
                  <div className="menu-items-texts">
                    <h4>Lamborgini Aventador</h4>
                    <p>₹5.01 Crore - ₹5.62 Crore</p>
                  </div>
                  <div className="menu-items-icons">
                    <div className="tag">
                      <img src={heartIcon} alt="" />
                    </div>
                    <div className="tag">
                      <img src={heartIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home-sponsors-container">
        <div className="sponsors-logos-container">
          <img src={carLogo1} alt="" />
          <img src={carLogo2} alt="" />
          <img src={carLogo3} alt="" />
          <img src={carLogo4} alt="" />
          <img src={carLogo5} alt="" />
          <img src={carLogo6} alt="" />
          <img src={carLogo7} alt="" />
        </div>
        <div className="sponsors-text-container">
          <h2>
            THE COMPLETE CATALOGUE
            <br />
            OF AUTOMOBILES
          </h2>
        </div>
      </div>
      <div className="home-bottom-container">
        <div className="home-search-container">
          <input type="text" name="" id="" />
          <div className="search" />
        </div>
        <div className="helpline">
          <h3>Not sure, Which car to buy?</h3>
          <p>Let us help you find the dream car</p>
        </div>
        <div className="bottom-title">
          <h2>NEWS AND REVIEW</h2>
          <div className="title-line" />
        </div>
        <div className="bottom-title bottom-title-right">
          <div className="title-line" />
          <h2>USED CARS</h2>
        </div>
        <div className="bottom-title">
          <h2>COMPARE CARS</h2>
          <div className="title-line" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
