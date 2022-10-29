import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: 999999;
`;
const Text = styled.div`
  margin-right: 80px;
`;
const H1 = styled.h1`
  color: #000;
  font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 72px;
  margin: 0;
  height: 85px;
`;
const P = styled.p`
  color: rgb(51, 54, 63);
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 24px;
  margin: 0px;
`;
const Des = styled.p`
  color: rgb(136, 142, 158);
  font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 16px;
  margin: 0;
`;
const Button = styled.button`
  display: inline-block;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: linear-gradient(99deg, #f74530, #ff3278);
  border: 1px solid transparent;
  padding: 6px 24px;
  font-size: 16px;
  line-height: 1.42857143;
  user-select: none;
  transition: all 0.15s ease;
  border-radius: 30px;
  color: white;
  box-shadow: 0 3px 16px 0 rgb(247 123 155 / 71%);
  opacity: 1;
  margin-top: 20px;
`;
export const NotFound = () => {
  return (
    <Main>
      <Text>
        <H1>404</H1>
        <P>Page not found</P>
        <Des>Looks like you took a wrong turn. Let's get you back on track</Des>
        <Link to="/">
          <Button>Go To Cut Fit</Button>
        </Link>
      </Text>
      <img
        width="700px"
        src="https://static.cure.fit/assets/images/error-screen-image.png"
        alt=""
      />
    </Main>
  );
};
