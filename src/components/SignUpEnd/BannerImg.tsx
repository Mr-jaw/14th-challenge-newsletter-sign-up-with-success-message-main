import desktopBanner from "../../assets/images/illustration-sign-up-desktop.svg";
import mobileBanner from "../../assets/images/illustration-sign-up-mobile.svg";

const BannerImg = () => {
  return (
    <div className="banner-container">
      <img src={desktopBanner} className="desktop-banner" alt="" />
      <img src={mobileBanner} className="mobile-banner" alt="" />
    </div>
  );
};

export default BannerImg;
