import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Main = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  padding: 50px;
  align-items: flex-start;
  & > div {
    width: 500px;
  }
`;
const Address = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 18px;
  & div {
    display: flex;
  }
  & .location {
    margin-right: 10px;
  }
`;
const H1 = styled.h1`
  font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
`;
const Modify = styled.div`
  cursor: pointer;
  font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  color: #ff3278;
`;
const Price = styled.div`
  & div {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
`;
const P = styled.p`
  opacity: 0.87;
  font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  & h2 {
    font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.67;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    color: #000;
  }
`;
const HR = styled.div`
  width: 100%;
  height: 1px;
  background: #00000067;
`;

const Button = styled.button`
  border-radius: 31px;
  background-image: linear-gradient(103deg, #f74530, #ff2e73);
  padding: 12px 40px;
  border: 0;
  color: #fff;
  margin: 10px;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CheckOut = () => {
  const user = useSelector((state) => state.user);
  let [totalPrice, setTotalPrice] = useState();
  let total = 0;
  useEffect(() => {
    for (let i = 0; i < user.cart.length; i++) {
      total += user.cart[i].price * user.cart[i].count;
    }
    setTotalPrice(total);
  }, [user]);

  return (
    <Main>
      <div>
        <Address>
          <div>
            {" "}
            <img
              className="location"
              src="https://static.cure.fit/assets/images/locationPink.svg"
              alt=""
            />
            <H1>Please Add Address</H1>
          </div>
          <div>
            <Modify>Add/Modify</Modify>
          </div>
        </Address>
        <HR />
        <Price>
          <div>
            <P>Total Price</P>
            <P>₹ {totalPrice}</P>
          </div>
          <div>
            <P>( _ ) Discount</P>
            <P>₹ {Math.floor(totalPrice / 4)}</P>
          </div>
        </Price>
        <Total>
          <h2>Total Payable</h2>
          <h2>₹ {totalPrice - Math.floor(totalPrice / 4)}</h2>
        </Total>
        <BtnDiv>
          {" "}
          <Button>Select Address</Button>
        </BtnDiv>
      </div>
    </Main>
  );
};
