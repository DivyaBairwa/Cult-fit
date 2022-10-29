import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SecondaryNav } from "./SecondaryNav";
import "./style/navbar.css";
import { useSelector } from "react-redux";

import { Cart } from "./cart";

const Navbar = ({ setLog, changeState }) => {
  const isLoged = useSelector((store) => store.login.log);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();

  const cartClassChange = () => {
    setCart(!cart);
  };

  const { pathname } = useLocation();
  const [change, setChange] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="top-nav">
        <Link onClick={() => setChange(!change)} to="/" className="logo">
          <img
            width="120px"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
            alt=""
          />
        </Link>
        <div className="top-navigations">
          <Link
            onClick={() => setChange(!change)}
            to="/gym"
            className={(pathname.startsWith("/cult") && "active-link") || ""}
          >
            <div className="link-box">
              <div className="links">
                <h5 className="main-link">CULT</h5>
              </div>
            </div>
          </Link>

          <Link
            onClick={() => setChange(!change)}
            to="/fitness"
            className={(pathname.startsWith("/live") && "active-link") || ""}
          >
            <div className="link-box">
              <div className="links">
                <h5 className="main-link">LIVE</h5>
              </div>
            </div>
          </Link>

          <Link
            onClick={() => setChange(!change)}
            to="/doctor-consultation"
            className={(pathname.startsWith("/care") && "active-link") || ""}
          >
            <div className="link-box">
              <div className="links">
                <h5 className="main-link">CARE</h5>
              </div>
            </div>
          </Link>

          <Link
            onClick={() => setChange(!change)}
            to="/eatordernow"
            className={(pathname.startsWith("/eat") && "active-link") || ""}
          >
            <div className="link-box">
              <div className="links">
                <h5 className="main-link">EAT</h5>
              </div>
            </div>
          </Link>

          <Link
            onClick={() => setChange(!change)}
            to="/therapy"
            className={(pathname.startsWith("/mind") && "active-link") || ""}
          >
            <div className="link-box">
              <div className="links">
                <h5 className="main-link">MIND</h5>
              </div>
            </div>
          </Link>

          <Link
            onClick={() => setChange(!change)}
            to="/gear"
            className={(pathname.startsWith("/store") && "active-link") || ""}
          >
            <div className="link-box">
              <div className="links">
                <h5 className="main-link">STORE</h5>
              </div>
            </div>
          </Link>
        </div>
        {/* /////////////////////// */}
        <div className="top-right">
          <div className="top-right-main ">
            <div className="city-name ">BANGALORE</div>
            <div width="26" className="top-right-con ">
              <div width="26" height="26" className="top-right-icon-div "></div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                alt="location_pin"
                className=" top-right-icon-img "
                loading="lazy"
                width="26"
                height="26"
              />
            </div>
          </div>
          <button color="primary" className="get-app">
            <div className="get-app-btn ">GET APP</div>
          </button>
          <div className="top-right-link-div ">
            <div className="top-right">
              <div width="35" className="top-right-images ">
                <div
                  width="35"
                  height="35"
                  className="top-right-icon-div"
                ></div>
                <img
                  onClick={() => {
                    setLog(true);
                  }}
                  src={
                    "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" ||
                    "https://profile-pictures-prod.s3.amazonaws.com/4728c80a-ad4a-42c3-8d96-67631b04e922"
                  }
                  alt="user_profile_picture"
                  className=" profile-pic"
                  loading="lazy"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div className="style-prefix-e0dnmk">
            <div width="24" className="cart-div" onClick={cartClassChange}>
              <span className="cart-dot"></span>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
                alt="cart-image"
                className=" top-right-icon-ing "
                loading="lazy"
                width="24"
                height="22.01834862385321"
              />
            </div>
          </div>
        </div>
        {cart && <Cart setCart={setCart} changeState={changeState} />}
      </nav>
      <SecondaryNav change={{ change }} scrollPosition={scrollPosition} />
    </>
  );
};

export default Navbar;
