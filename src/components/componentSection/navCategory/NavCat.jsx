import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  height: 500px;
  width: 1200px;
  margin: auto;
  margin-bottom: 200px;
`;
const TextDiv = styled.div`
  width: 100%;
  position: relative;
`;
const SubHeading = styled.div`
  font-size: 20px;
  margin: 0 0 10px 0;
  color: #4c4c4c;
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
`;
const P = styled.div`
  font-size: 14px;
  width: 50%;
  margin: 5px 0 15px 0;
  color: #6c6c6c;
  line-height: 27px;
`;
const ImgDiv = styled.div`
  height: 450px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;
const Img1 = styled.div`
  height: 100%;
  width: ${(prop) => (prop.img.hover ? "60%" : "20.5%")};
  background-image: url(${(prop) => prop.img.src});
  background-size: cover;
  background-position: center;
  animation-name: img;
  animation-duration: 2s;
  padding: 20px;
  transition: width 1s ease;
  @keyframes img {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 0;
    }
  }
`;
const Img2 = styled.div`
  height: 100%;
  width: ${(prop) => (prop.img.hover ? "60%" : "20.5%")};
  background-image: url(${(prop) => prop.img.src});
  background-size: cover;
  background-position: center;
  padding: 20px;
  animation-name: img;
  animation-duration: 3s;
  transition: width 1s ease;
  @keyframes img {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 0;
    }
  }
`;
const Img3 = styled.div`
  height: 100%;
  width: ${(prop) => (prop.img.hover ? "60%" : "20.5%")};
  background-image: url(${(prop) => prop.img.src});
  background-size: cover;
  background-position: center;
  padding: 20px;
  animation-name: img;
  animation-duration: 4s;
  transition: width 1s ease;
  @keyframes img {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 0;
    }
  }
`;
const H1 = styled.h1`
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
  color: #fff;
  width: 70%;
`;
const ImgText = styled.div`
  padding-left: 20px;
`;
const ImgP = styled.p`
  font-size: 14px;
  width: 290px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #dfdfdf;
  font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
`;
const Button = styled.button`
  cursor: pointer;
  float: left;
  padding: 5px 10px 5px 10px;
  color: #ffff;
  border: 1px solid white;
  border-radius: 30px;
`;
//////////////////////////////////////////////
export const NavCat = ({ data }) => {
  const navigate = useNavigate();

  /////
  const [hover, setHover] = useState({
    one: true,
    two: false,
    three: false,
  });

  return (
    <Main>
      <TextDiv>
        <img width="90px" className="mb-6" src={data.logo_img} alt="" />
        <SubHeading>{data.title}</SubHeading>
        <P>{data.description}</P>
      </TextDiv>
      <ImgDiv className=" mt-10 mb-52">
        <Img1
          className="pointer"
          onMouseEnter={() => {
            setHover({
              one: true,
              two: false,
              three: false,
            });
          }}
          img={{ src: data.img1.src, hover: hover.one }}
        >
          <H1>{data.img1.title}</H1>
          {hover.one && (
            <ImgText>
              <ImgP>{data.img1.description}</ImgP>
              <Button onClick={() => navigate(data.pathname)}>EXPLORE</Button>
            </ImgText>
          )}
        </Img1>
        <Img2
          className="pointer"
          onMouseEnter={() => {
            setHover({
              one: false,
              two: true,
              three: false,
            });
          }}
          img={{ src: data.img2.src, hover: hover.two }}
        >
          <H1>{data.img2.title}</H1>
          {hover.two && (
            <ImgText>
              <ImgP>{data.img2.description}</ImgP>
              <Button onClick={() => navigate(data.pathname)}>EXPLORE</Button>
            </ImgText>
          )}
        </Img2>
        <Img3
          className="pointer"
          onMouseEnter={() => {
            setHover({
              one: false,
              two: false,
              three: true,
            });
          }}
          img={{ src: data.img3.src, hover: hover.three }}
        >
          <H1>{data.img3.title}</H1>
          {hover.three && (
            <ImgText>
              <ImgP>{data.img3.description}</ImgP>
              <Button onClick={() => navigate(data.pathname)}>EXPLORE</Button>
            </ImgText>
          )}
        </Img3>
      </ImgDiv>
    </Main>
  );
};
