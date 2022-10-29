import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hr = styled.div`
  width: 70%;
  height: 1px;
  margin-top: 40px;
  position: relative;
  background: white;
  &::before {
    content: "ENJOY THE BENEFITS OF";
    background-color: #586284;
    position: absolute;
    font-size: 16px;
    color: rgb(255, 255, 255);
    top: -10px;
    padding: 0px 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const H2 = styled.h2`
  color: white;
  margin: 5px 0px 0px 5px;
  font-size: 16px;
  text-align: unset;
`;
const H1 = styled.h1`
  font-size: 16px;
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 20px;
`;
export const MembershipSection = ({ promoStyle }) => {
  return (
    <div style={promoStyle.style} className="w-full mt-60">
      <div className="flex width-1200 text-white flex-col items-center pt-10">
        <h1 className=" bold-text-heading">{promoStyle.title}</h1>
        <p className="text-sub-gray">{promoStyle.subHeading}</p>
        <Hr></Hr>
      </div>
      <div className="flex width-1200 justify-between pt-24">
        <H2 className="flex">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/livept/web/home.png"
            className="w-6 h-9"
            alt=""
          />
          <div className="text-xl pt-1.5 pl-2">At Home Workouts</div>
        </H2>
        <H2 className="flex">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/livept/web/cult.png"
            className="w-6 h-9"
            alt=""
          />
          <div className="text-xl pt-1.5 pl-2">Personalized Workouts</div>
        </H2>
        <H2 className="flex">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/livept/web/plan.png"
            className="w-6 h-9"
            alt=""
          />
          <div className="text-xl pt-1.5 pl-2">Posture Correction</div>
        </H2>
      </div>
      <H1 className=" mt-16 ">Choose Your Subscription</H1>
      <div className="flex width-1200 justify-between">
        <div>
          <div className="flex justify-between bg-white p-4 rounded-xl">
            <div>
              <p className="text-2xl font-bold p-1">50 + 50 sessions</p>
              <p className="text-2xl font-bold p-1">₹23490</p>
              <p className="text-gray-400 text-lg p-1">240 days validity</p>
            </div>
            <div className="text-pink-500 font-bold mt-10">
              <Link to="#">BUY</Link>
            </div>
          </div>
          <div className="flex bg-cyan-100 p-4 rounded-xl gap-3">
            <img
              src="https://static.cure.fit/assets/images/offer-icon-copy.svg"
              className="w-4"
              alt=""
            />
            <div className="text-lg">
              Get 50 sessions Live PT FREE 50 session pack
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between bg-white p-4 rounded-xl">
            <div>
              <p className="text-2xl font-bold p-1">25 + 25 sessions</p>
              <p className="text-2xl font-bold p-1">₹14490</p>
              <p className="text-gray-400 text-lg p-1">150 days validity</p>
            </div>
            <div className="text-pink-500 font-bold mt-10">
              <Link to="#">BUY</Link>
            </div>
          </div>
          <div className="flex bg-cyan-100 p-4 rounded-xl gap-3">
            <img
              src="https://static.cure.fit/assets/images/offer-icon-copy.svg"
              className="w-4"
              alt=""
            />
            <div className="text-lg">
              Get 25 sessions Live PT FREE 25 session pack
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between bg-white p-4 rounded-xl">
            <div>
              <p className="text-2xl font-bold p-1">10 + 10 sessions</p>
              <p className="text-2xl font-bold p-1">₹7490</p>
              <p className="text-gray-400 text-lg p-1">90 days validity</p>
            </div>
            <div className="text-pink-500 font-bold mt-10">
              <Link to="#">BUY</Link>
            </div>
          </div>
          <div className="flex bg-cyan-100 p-4 rounded-xl gap-3">
            <img
              src="https://static.cure.fit/assets/images/offer-icon-copy.svg"
              className="w-4"
              alt=""
            />
            <div className="text-lg">
              Get 10 sessions Live PT FREE 10 session pack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
