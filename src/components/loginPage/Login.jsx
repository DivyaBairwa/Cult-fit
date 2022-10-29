import { useState } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../../firebase-config";

import {
  RecaptchaVerifier,
  signInWithPopup,
  signInWithPhoneNumber,
} from "firebase/auth";
import { Otp } from "./Otp";

const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 550px;
  border: 1px solid white;
  border-radius: 15px;
  z-index: 999999;
  overflow: hidden;
`;
const BG = styled.div`
  position: fixed;
  background: #00000094;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cross = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  padding: 20px;
  padding-top: 5px;
  & > div {
    cursor: pointer;
    color: white;
    font-family: "BrandonTextWeb-Regular";
    opacity: 0.5;
    font-size: 30px !important;
    font-weight: 700;
    text-shadow: rgb(255 255 255) 0px 1px 0px;
    transition: opacity 1s ease;
  }
  & > div:hover {
    opacity: 1;
  }
`;
const Input = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  position: relative;
  & > input {
    width: 70%;
    background-color: transparent;
    padding-left: 50px;
    font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
    border: none;
    font-size: 18px;
    color: white;
    border-bottom: 1px solid #d8d8d8ce;
  }
  & > input:focus {
    outline: none;
  }
  &::before {
    content: "+91";
    color: #ffffffdc;
    position: absolute;
    left: 15%;
    font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
    top: -10%;
    font-size: 20px;
    font-weight: bold;
    z-index: 99999999999999;
  }
  &::after {
    content: ">";
    color: #ffffff84;
    position: absolute;
    left: 24%;
    transform: rotate(90deg);
    font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
    top: 0;
    font-size: 20px;
    font-weight: bold;
    z-index: 99999999999999;
  }
`;
const Button = styled.button`
  margin: auto;
  display: flex;
  margin-top: 30px;
  width: 70%;
  cursor: pointer;
  font-family: Inter-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  border: 1px solid transparent;
  transition: all 250ms ease 0s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  font-size: 12px;
  border-radius: 5px;
  padding: 7px 15px;
  font-weight: 700;
  width: 80%;
  letter-spacing: 1px;
`;
const Google = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 70%;
  cursor: pointer;
  font-family: Inter-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  border: 1px solid transparent;
  transition: all 250ms ease 0s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(50px);
  font-size: 12px;
  border-radius: 5px;
  padding: 7px 50px;
  font-weight: 700;
  width: 80%;
`;
const Policy = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-family: Inter-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  letter-spacing: 0px;
  width: 69%;
  margin: 40px auto;
  text-align: center;
`;

export const Login = ({ setLog, checkUserLoged }) => {
  const [number, setNumber] = useState(null);
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState([]);

  const signIn = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      checkUserLoged();
      sessionStorage.setItem(
        "Auth Token",
        response._tokenResponse.refreshToken
      );
      setLog(false);
    });
  };
  function ganerateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  }
  function SignInWithPhone() {
    ganerateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91" + number, appVerifier)
      .then((res) => {
        window.confirmationResult = res;
        setSent(true);
      })
      .catch((err) => console.log("err:-", err));
  }

  const verifyOtp = () => {
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp.join(""))
        .then((result) => {
          const user = result.user;
          sessionStorage.setItem(
            "Auth Token",
            user.stsTokenManager.refreshToken
          );
          console.log(result);
          checkUserLoged();
          setLog(false);
        })
        .catch((error) => {
          console.log(error);
          alert("Wrong OTP");
        });
    }
  };

  return (
    <div>
      <Main>
        <Content>
          <Cross>
            <div onClick={() => setLog(false)}>x</div>
          </Cross>
          <Logo>
            <img
              style={{
                marginBottom: "10px",
              }}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,ar_1,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
              alt=""
            />
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.55,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png"
              alt=""
            />
          </Logo>
          {sent ? (
            <Otp otp={otp} setOtp={setOtp} />
          ) : (
            <Input>
              <input
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter your phone number"
                type="text"
              />
            </Input>
          )}

          <Button
            id="sign-in-button"
            onClick={sent ? verifyOtp : SignInWithPhone}
          >
            Continue
          </Button>
          <Google onClick={() => signIn()}>
            Or continue with Google{" "}
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_1,f_auto,fl_progressive//image/login/google-login-white.svg"
              alt=""
            />{" "}
          </Google>
          <Policy>
            * By Continuing you agree to the Terms of Services and Privacy
            policy.
          </Policy>
        </Content>
      </Main>
      <BG onClick={() => setLog(false)}></BG>
    </div>
  );
};
