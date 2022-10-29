import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-image: linear-gradient(to right, #6f69aa, #378ac5);
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextDiv = styled.div`
  width: 30%;
  height: 50%;
`;
const ImgDiv = styled.div``;
const H1 = styled.div`
  color: white;
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 36px;
  padding-bottom: 20px;
`;
const P = styled.div`
  color: white;
  font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 19px;
  padding-bottom: 30px;
`;
const LogoDiv = styled.div`
  display: flex;
`;

export const MobilePromo = () => {
  return (
    <Main>
      <TextDiv>
        <H1>Get the cult.fit app for your mobile device</H1>
        <P>Be better everyday with cult.fit app</P>
        <LogoDiv>
          <a
            href="https://itunes.apple.com/us/app/cure-fit/id1217794588"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://static.cure.fit/assets/images/app-store.svg"
              alt=""
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=fit.cure.android"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ml-10"
              src="https://static.cure.fit/assets/images/play-store.svg"
              alt=""
            />
          </a>
        </LogoDiv>
      </TextDiv>
      <ImgDiv>
        <img
          width="300px"
          className="ml-20"
          alt=""
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,h_350,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/364bf400-9855-4345-a63e-63c31432a6b8.png"
        />
      </ImgDiv>
    </Main>
  );
};
