import React from "react";
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
const Span = styled.span`
  color: white;
  padding-top: 5px;
  font-size: 16px;
  margin: 0px;
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
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
const DivCon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0px;
  width: 300px;
`;
const InnerDiv = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 13%) 0px 2px 4px 0px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const InnerP = styled.p`
  overflow: hidden;
  font-size: 16px;
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  margin: 0px;
`;
const SecDiv = styled.div`
  border-radius: 100px;
  align-self: center;
  padding: 0px 0px 0px 5px;
  text-align: center;
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: rgb(255, 50, 120);
  margin: 0px;
  background: white;
`;
const SecCon = styled.div`
  display: grid;
  border-radius: 10px;
  align-items: self-start;
  grid-template-columns: 12% auto;
  background: linear-gradient(to right, black 33%, rgba(255, 255, 255, 0) 0%)
    center top / 13px 1px repeat-x rgb(247, 247, 247);
  padding: 10px;
  width: 100%;
`;
const SecConDiv = styled.div`
  transform: rotate(-90deg);
  padding: 0px 5px;
`;
const SecConP = styled.p`
  color: rgb(54, 54, 54);
  font-family: BrandonTextWeb-Regular, "Helvetica Neue", Helvetica, Roboto,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  padding: 3px 0px 0px;
  margin: 0px;
`;
export const PriceList = ({ promoStyle }) => {
  return (
    <div style={promoStyle.style} className="w-full mt-60">
      <div className="flex width-1200 text-white flex-col items-center pt-10">
        <h1 className=" bold-text-heading">{promoStyle.title}</h1>
        <p className="text-sub-gray">{promoStyle.subHeading}</p>
        <Hr></Hr>
      </div>
      <div className="flex width-1200 justify-between pt-24">
        <H2>
          <Span>Buy Now</Span> start anytime
        </H2>
        <H2>
          <Span> Pause</Span> pack anytime
        </H2>
        <H2>
          <Span>Safest</Span>
          gyms In Town
        </H2>
        <H2>
          <Span>No-Cost</Span>
          EMI available
        </H2>
      </div>
      <H1 className=" mt-16 ">Choose Your Subscription</H1>
      <div className="flex width-1200 justify-between">
        <DivCon>
          <InnerDiv>
            <div>
              <InnerP>12 Months</InnerP>
              <SecDiv></SecDiv>
            </div>
            <SecCon>
              <SecConDiv>
                <img src="https://static.cure.fit/assets/images/offer-icon-copy.svg"  alt="" />
              </SecConDiv>
              <SecConP>Only Today I Get additional Rs.500 OFF</SecConP>
            </SecCon>
          </InnerDiv>
        </DivCon>
        <DivCon>
          <InnerDiv>
            <div>
              <InnerP>12 Months</InnerP>
              <SecDiv></SecDiv>
            </div>
            <SecCon>
              <SecConDiv>
                <img src="https://static.cure.fit/assets/images/offer-icon-copy.svg"  alt="" />
              </SecConDiv>
              <SecConP>Only Today I Get additional Rs.500 OFF</SecConP>
            </SecCon>
          </InnerDiv>
        </DivCon>
        <DivCon>
          <InnerDiv>
            <div>
              <InnerP>12 Months</InnerP>
              <SecDiv></SecDiv>
            </div>
            <SecCon>
              <SecConDiv>
                <img src="https://static.cure.fit/assets/images/offer-icon-copy.svg"  alt="" />
              </SecConDiv>
              <SecConP>Only Today I Get additional Rs.500 OFF</SecConP>
            </SecCon>
          </InnerDiv>
        </DivCon>
      </div>
    </div>
  );
};
