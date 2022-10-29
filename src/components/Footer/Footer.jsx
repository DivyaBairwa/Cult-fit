import "./style/footer.css";
import cult_fit from "./images/vman-and-white-cult-text.png";
import download_on_app_store from "./images/download_on_app_store.png";
import download_on_google_play from "./images/download_on_google_play.png";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "./icons/icons";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="imageWithDetails">
        <div>
          <img src={cult_fit} />
        </div>
        <p>
          At cult.fit, we make group workouts fun, daily food healthy & tasty,
          mental fitness easy with yoga & meditation, Medical & lifestyle care
          hassle- free.#BeBetterEveryDay
        </p>
      </div>
      <div className="footer-mid-section">
        <div>
          <a>cult.fit for business</a>
          <a>cult.fit franchise</a>
          <a>corporate partnerships</a>
          <a>cult pass network</a>
        </div>
        <div>
          <a>partner.fit</a>
          <a>blogs</a>
          <a>talks</a>
          <a>careers</a>
        </div>
        <div>
          <a>contact us</a>
          <a>privacy policy</a>
          <a>refund policy</a>
          <a>terms & conditions</a>
        </div>
      </div>
      <div className="footer-social-section">
        <div>
          <div className="download-app">
            <a
              href="https://apps.apple.com/us/app/cure-fit/id1217794588"
              target="_blank"
            >
              <img src={download_on_app_store} />
            </a>
          </div>
          <div className="download-app">
            <a
              href="https://play.google.com/store/apps/details?id=fit.cure.android"
              target="_blank"
            >
              <img src={download_on_google_play} />
            </a>
          </div>
          <div className="footer-icons">
            <a
              href="https://www.youtube.com/channel/UCSE72IaHOL-1Tv-m3JHE4Cg"
              target="_blank"
            >
              <YoutubeLogo />
            </a>
            <a href="https://www.facebook.com/cultfitofficial" target="_blank">
              <FacebookLogo />
            </a>
            <a href="https://twitter.com/cultfitOfficial" target="_blank">
              <TwitterLogo />
            </a>
            <a
              href="https://www.instagram.com/cultfitOfficial/"
              target="_blank"
            >
              <InstagramLogo />
            </a>
            <a
              href="https://www.linkedin.com/company/cult.fit/"
              target="_blank"
            >
              <LinkedinLogo />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
