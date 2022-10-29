import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 1200px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(2, 584px);
  gap: 30px;
`;
const Div = styled.div`
  border-radius: 10px;
  cursor: pointer;
  height: 256px;
  background-image: url(${(prop) => prop.img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
const H1 = styled.h1`
  margin-bottom: 10px;
  font-size: 22px;
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  color: rgb(0, 0, 0);
  text-align: left;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: #808080c5;
    top: 110%;
    left: 2px;
  }
`;
const P = styled.p`
  margin-bottom: 15px;
  width: 70%;
  font-size: 12px;
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  display: flex;
  color: rgb(64, 64, 64);
  text-align: left;
  & img {
    margin-right: 10px;
    width: 15px;
  }
`;
const Price = styled.div`
  min-width: fit-content;
  color: rgb(0, 0, 0);
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
`;
const Cut = styled.div`
  min-width: fit-content;
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  color: rgba(0, 0, 0, 0.34);
  text-decoration: line-through;
  margin-right: 6px;
`;

export const Sessions = ({ data }) => {
  return (
    <Main>
      {data.map((session) => {
        return (
          <div key={session.id}>
            <Div img={session.image}>
              <div>
                <H1>{session.title}</H1>
                <P>{session.desc}</P>
                <P>
                  {" "}
                  <img
                    src="	https://static.cure.fit/assets/images/Time-Icon-2.png"
                    alt=""
                  />{" "}
                  {session.time} Mins Session
                </P>
              </div>
              <div>
                <Price className="flex">
                  <Cut>{session.cutPrice}</Cut>
                  {session.price}
                </Price>
              </div>
            </Div>
          </div>
        );
      })}
    </Main>
  );
};
