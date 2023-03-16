import "./style.scss";
import globeIcon from "../../assets/icons/globe.svg";
import locationIcon from "../../assets/icons/location.svg";
const LanguageCountry = () => {
  return (
    <div className="lc-container">
      <div className="line-container"></div>
      <div className="lc-inner-container">
        <div className="lc-l-container">
          <img src={globeIcon} alt="" />
          <select name="" id="">
            <option style={{ color: "#fff" }} value="">
              English
            </option>
            <option value="">Arabic</option>
            <option value="">Malayalam</option>
          </select>
        </div>
        <div className="lc-c-container">
          <img src={locationIcon} alt="" />
          <select name="" id="">
            <option value="">India</option>
            <option value="">US</option>
            <option value="">Canada</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageCountry;
