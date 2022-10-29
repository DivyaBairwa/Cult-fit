import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 20px 30px;
  width: 1200px;
  margin: auto;
  margin-top: 50px;
`;
const Img = styled.div`
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  & > img {
    width: 100%;
  }
  &:hover {
    width: 249px;
    height: 299px;
  }
`;

export const Cards = ({ data }) => {
  console.log(data);
  return (
    <Main>
      {data.map((img) => {
        return (
          <Img>
            <img src={img} alt="" />
          </Img>
        );
      })}
    </Main>
  );
};
