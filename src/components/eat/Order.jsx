import { useState } from "react";
import styled from "styled-components";
import { Banner } from "../componentSection/banner/banner";
import { ShowProducts } from "../componentSection/showProducts/ShowProducts";
import { data } from "../../data/fresh_fruits";
import { food } from "../../data/food";

const H1 = styled.div`
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 24px;
  width: 1200px;
  margin: auto;
  margin-top: 50px;
  letter-spacing: -0.2px;
  padding: 0px 0px 30px;
  color: black;
`;
const MealNav = styled.div`
  display: flex;
  width: 1200px;
  margin: auto;
  & > div {
    list-style: none;
    cursor: pointer;
    margin-right: 43px;
    font-size: 16px;
    color: rgb(163, 163, 163);
    padding: 10px 15px;
  }
  & > .active {
    color: black;
    padding: 10px 15px;
    border-bottom: 4px solid rgb(255, 50, 120);
  }
`;
export const Order = () => {
  const [nav, setNav] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });
  let Breakfast = food();
  let Ddata = data();
  const toggleNav = (value) => {
    setNav({
      ...{
        one: false,
        two: false,
        three: false,
        four: false,
      },
      [value]: true,
    });
  };
  const image = {
    src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/e0bdda68-5d26-4e16-a69c-6c1b738b62cf.jpg",
  };
  return (
    <div>
      <Banner image={image} />
      <H1>Meal Plans</H1>
      <MealNav>
        <div
          onClick={() => toggleNav("one")}
          className={nav.one ? "active" : ""}
        >
          Breakfast
        </div>
        <div
          onClick={() => toggleNav("two")}
          className={nav.two ? "active" : ""}
        >
          Lunch
        </div>
        <div
          onClick={() => toggleNav("three")}
          className={nav.three ? "active" : ""}
        >
          Snacks
        </div>
        <div
          onClick={() => toggleNav("four")}
          className={nav.four ? "active" : ""}
        >
          Dinner
        </div>
      </MealNav>
      <ShowProducts data={nav.one ? Breakfast : Ddata} />
    </div>
  );
};
