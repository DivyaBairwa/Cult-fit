import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 20px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 50px;
`;
const Img = styled.div`
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.5s ease;
  &:hover {
    transform: translateY(-20px);
  }
`;
const Text = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-family: BrandonTextWeb "Helvetica Neue", Helvetica, Roboto, Arial;
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  & span {
    color: rgba(0, 0, 0, 0.34);
    font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto,
      Arial, sans-serif;
    text-decoration: line-through;
  }
  & .price {
    color: rgb(0, 0, 0);
    font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
      sans-serif;
    text-decoration: none;
  }
`;
export const ShowProducts = ({ data }) => {
  return (
    <Main className="width-1200">
      {data.map((prod) => {
        return (
          <div
            style={{
              cursor: "pointer",
            }}
            key={prod.id}
          >
            <Img>
              <img src={prod.images[0]} alt="" />
            </Img>
            <Text>
              <div>
                <p>Starting from</p>
                <span>₹ {prod.cutPrice} / meal</span>
              </div>
              <div>
                <p>Offer Price</p>
                <span className="price">₹ {prod.price} / meal</span>
              </div>
            </Text>
          </div>
        );
      })}
    </Main>
  );
};
