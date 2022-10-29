import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import {
  CultFitMen,
  CultFitWomen,
  Cycle,
  Footwear,
  Food,
  SpinBike,
  Treadmills,
} from "../../data/data";

const Main = styled.div`
  height: fit-content;
  margin-bottom: 50px;
`;
const H1 = styled.h1`
  font-size: 25px;
  margin-top: 25px;
  font-weight: 700;
  padding: 0 15px;
`;
const Div = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 30px;
`;
const Img = styled.div``;

const Text = styled.div`
  & > h1 {
    color: #000;
    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
    text-transform: uppercase;
  }
  & > p {
    font-size: 14px;
    line-height: 16px;
    margin: 5px 0;
    color: #9b9b9b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .price {
    font-size: 15px;
    color: #242424;
    font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
  }
  & .cut {
    color: #9b9b9b;
    text-decoration: line-through;
    font-size: 12px;
    margin: 0px 5px;
  }
  & .off {
    color: #ff3278;
    font-size: 12px;
    font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
  }
`;

export const Products = () => {
  const { cat } = useParams();
  let dataObj = {
    men: CultFitMen,
    women: CultFitWomen,
    spinbike: Cycle,
    cycle: Footwear,
    food: Food,
    footwear: SpinBike,
    running: SpinBike,
    treadmills: Treadmills,
    strength: Treadmills,
    dance: CultFitWomen,
    yoga: CultFitWomen,
  };
  let data = dataObj[cat]();
  return (
    <Main className="width-1200">
      <H1 className="my-10">{cat.toLocaleUpperCase()}</H1>
      <Div>
        {data.map((product) => {
          return (
            <Link to={"/product/" + product.id} key={product.id}>
              <div>
                <Img>
                  <img src={product.images[0]} alt="" />
                </Img>
                <Text>
                  <h1>{product.tagName}</h1>
                  <p>{product.title}</p>
                  <div>
                    <span className="price">₹ {product.price} </span>
                    <span className="cut">{product.cutPrice} </span>
                    <span className="off">
                      {((100 * product.price) / product.cutPrice).toFixed()}%
                      Off
                    </span>
                  </div>
                </Text>
              </div>
            </Link>
          );
        })}
      </Div>
    </Main>
  );
};
