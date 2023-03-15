import "./App.scss";
import LanguageCountry from "./components/LanguageCountry/LanguageCountry.jsx";
import Navbar from "./components/Navbar/Navbar";
import heartIcon from "./assets/icons/heart.svg";
import arrowRight from "./assets/icons/arrow-right.svg";
import swiperIcon from "./assets/icons/swiper.png";
import image from "./assets/images/background.jpg";
//slider imgs
import slider1 from "./assets/images/slider/1.jpg";
import slider2 from "./assets/images/slider/2.jpg";
import slider3 from "./assets/images/slider/3.jpg";
//menu images
import menu1 from "./assets/images/menu/1.jpg";
import menu2 from "./assets/images/menu/2.jpg";
import menu3 from "./assets/images/menu/3.jpg";

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
        <div className="page-switch">page switch</div>
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
    </div>
  );
}

export default App;