import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const FirstDiv = styled.div`
  height: 40em;
  margin-top: 10rem;
`;
const Video = styled.video`
  height: 450px;
  background-color: #a1b0c5;
  border-radius: 10px;
  overflow: hidden;
  margin: 30px 0px 0px;

  float: left;
`;
const TextDiv = styled.div`
  width: 50%;
`;
const VideoDiv = styled.div`
  width: 100%;
  position: relative;
`;
const MuteBtn = styled.div`
  position: absolute;
  top: 80%;
  right: 1%;
  cursor: pointer;
`;
const H1Text = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  position: relative;
  line-height: 6rem;
  margin-top: 20px;
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
`;
const CoverDiv = styled.div`
  display: inline;
  position: absolute;
  width: 100px;
  height: 50px;
  overflow: hidden;
  left: 17rem;
  top: 13%;
`;
const Span = styled.span`
  animation: animation-1d3gycc 7.5s linear infinite 0s;
  color: #00abe9;
  position: absolute;
  top: -20%;
  transition: all 1s ease-out;
`;
const TextDivDes = styled.div`
  font-size: 18px;
  color: #6e6d6d;
  margin-top: 5%;
  margin-bottom: 10%;
  width: 95%;
  line-height: 40px;
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
`;
export const HeroSec = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const [text, setText] = useState(0);
  useEffect(() => {
    videoRef.current.muted = muted;
  }, [muted]);
  useEffect(() => {
    let id = setInterval(() => {
      setText((init) => {
        return (init + 1) % 3;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <FirstDiv className=" flex width-1200">
        <TextDiv className="left">
          <H1Text>
            For the
            <CoverDiv>
              <Span className={text === 0 ? "" : "none"}> love </Span>
              <Span className={text === 1 ? "" : "none"}> fun </Span>
              <Span className={text === 2 ? "" : "none"}> ease </Span>
            </CoverDiv>
          </H1Text>
          <H1Text>of fit</H1Text>
          <TextDivDes>
            At cult.fit, we strive to keep you fit & healthy through a range of
            holistic offerings that include fitness and yoga, healthy meals,
            mental wellbeing and primary care. Now anyone can now stay healthy
            from the safety of their homes with just a single app that helps you
            to #BeBetterEveryDay
          </TextDivDes>
        </TextDiv>
        <VideoDiv>
          <Video width="100%" autoPlay loop ref={videoRef}>
            <source
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/w_800,q_auto:eco/vc_auto/video/vm/54f8ba74-0a19-42dc-aa64-ec19f0dee189.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </Video>
          <MuteBtn onClick={() => setMuted(!muted)}>
            <img
              width="30px"
              src={`https://static.cure.fit/assets/images/volume-${
                muted ? "off" : "up"
              }-outline.svg`}
              alt=""
            />
          </MuteBtn>
        </VideoDiv>
      </FirstDiv>
    </div>
  );
};
