import { useState, useEffect } from "react";
import { data } from "../../data/allData";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { auth, db } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user/action";

const Main = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 50px;
  margin-top: 15px;
`;
const Left = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  place-content: center;
  gap: 20px;
`;
const Right = styled.div`
  padding: 30px;
  & h2 {
    color: #000;
    font-family: BrandonTextWeb-Medium;
    text-transform: uppercase;
    margin: 20px 0px;
  }
  & h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    color: #000;
    width: 80%;
    -webkit-flex: 7;
    -moz-box-flex: 7;
    -ms-flex: 7;
    flex: 7;
  }
  & .prod-price {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    color: #ff3278;
    padding-top: 4px;
    margin: 7px 15px 0 0;
    line-height: 30px;
  }
  & .cut-price {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    padding-top: 4px;
    margin: 7px 15px 0 0;
    line-height: 30px;
    color: rgb(74, 74, 74);
    text-decoration: line-through;
  }
  & .discount-price {
    color: #fff;
    background: rgb(245, 166, 35);
    padding: 10px 10px;
    line-height: 34px;
  }
  & p {
    margin: 20px 0px;
    color: #8e8a8a;
    font-family: BrandonTextWeb-Regular, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
  }
  & .choose-size {
    margin: 20px 0px;
    font-size: 13px;
    font-weight: 500;
  }
  & .sizes {
    margin: 20px 0px;
  }
  & .sizes span {
    padding: 0 18px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin: 8px 5px;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid transparent;
  }
  & .sizes span:hover,
  .sizes .ac-size {
    border: 1px solid #ffc80a;
  }

  & .ac-size {
  }
  & .buttons {
    margin: 20px 0px;
    display: flex;
    padding-right: 50px;
  }
  & .add-cart {
    height: auto;
    width: 25%;
    border-radius: 52px;
    background: #ff385a;
    background-image: linear-gradient(265deg, #fd2f6e, #f7433c);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
  }
  & .view-cart {
    height: auto;
    width: 25%;
    border-radius: 52px;
    background: #ff385a;
    background-image: linear-gradient(265deg, #fd2f6e, #f7433c);
    color: #fff;
    font-size: 16px;
    margin-left: 20px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
  }
`;

export const SingleProduct = ({ changeState, setLog }) => {
  const cartCount = useSelector((store) => store.user);
  const [size, setSize] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const toggleSize = (value) => {
    setSize({
      ...{
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      },
      [value]: true,
    });
  };
  const dispatch = useDispatch();

  let { id } = useParams();
  let products = data();
  let prod;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      prod = products[i];
      break;
    }
  }

  const addToCart = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        async function handlePost() {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
          let data = docSnap.data();
          let cart = data.cart;
          let find = false;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == prod.id) {
              cart[i].count++;
              find = true;
            }
          }
          if (!find) {
            await updateDoc(docRef, {
              cart: arrayUnion({
                id: prod.id,
                image: prod.images[0],
                tag: prod.tagName,
                title: prod.title,
                price: prod.price,
                size: size.one
                  ? "S"
                  : size.two
                  ? "M"
                  : size.four
                  ? "XL"
                  : size.five
                  ? "XXL"
                  : "ALL",
                count: 1,
              }),
            });
          } else {
            await updateDoc(docRef, {
              cart,
            });
          }

          changeState();
        }
        handlePost();
      } else {
        setLog(true);
      }
    });
  };

  return (
    <Main>
      <Left>
        {prod.images.map((img, i) => {
          return <img key={i} src={img} alt="" />;
        })}
      </Left>
      <Right>
        <h2>{prod.tagName}</h2>
        <h1>{prod.title}</h1>
        <div
          style={{
            margin: "20px 0px",
          }}
        >
          <span className="prod-price">{prod.price}</span>
          <span className="cut-price">{prod.cutPrice}</span>
          <span className="discount-price">
            {((100 * prod.price) / prod.cutPrice).toFixed()} % Off
          </span>
        </div>
        <p>{prod.description}</p>
        <div className="choose-size">
          Choose Size
          <span className="size-red">(Size Guide)</span>
        </div>
        <div className="sizes">
          <span
            onClick={() => toggleSize("one")}
            className={size.one ? "ac-size" : ""}
          >
            S{" "}
          </span>
          <span
            onClick={() => toggleSize("two")}
            className={size.two ? "ac-size" : ""}
          >
            M{" "}
          </span>
          <span
            onClick={() => toggleSize("three")}
            className={size.three ? "ac-size" : ""}
          >
            L{" "}
          </span>
          <span
            onClick={() => toggleSize("four")}
            className={size.four ? "ac-size" : ""}
          >
            XL{" "}
          </span>
          <span
            onClick={() => toggleSize("five")}
            className={size.five ? "ac-size" : ""}
          >
            XXL
          </span>
        </div>
        <div className="buttons">
          <div onClick={addToCart} className="add-cart">
            Add to Cart
          </div>{" "}
          <div className="view-cart">
            <Link to="/store/gear/checkout">
              View Cart <span>({cartCount.cart.length})</span>
            </Link>
          </div>
        </div>
      </Right>
    </Main>
  );
};
