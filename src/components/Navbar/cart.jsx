import { useState, useEffect } from "react";
import emptyCart from "./images/empty-cart.png";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { auth, db } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Img = styled.div`
	& img {
		width: 200px;
	}
`;
const Text = styled.div`
	padding: 2px 20px;
	position: relative;
	& h2 {
		cursor: default;
		margin: 0px;
		color: rgb(255, 255, 255);
	}
	& h1 {
		text-align: left;
		cursor: default;
		margin: 0px;
		color: rgb(202, 202, 202);
		font-size: 16px;
		font-family: Inter-Regular, "Helvetica Neue", Helvetica, Roboto, Arial,
			sans-serif;
		letter-spacing: 0.5px;
		line-height: 28px;
	}
	& p {
		cursor: default;
		margin: 0px;
		color: rgb(202, 202, 202);
		font-size: 14px;
		font-family: Inter-Regular, "Helvetica Neue", Helvetica, Roboto, Arial,
			sans-serif;
		letter-spacing: 0.5px;
		line-height: 22px;
		padding-top: 8px;
	}
	& span {
		text-align: center;
		cursor: default;
		margin: 0px;
		color: rgb(202, 202, 202);
		font-size: 18px;
		font-family: Inter-Regular, "Helvetica Neue", Helvetica, Roboto, Arial,
			sans-serif;
		letter-spacing: 0.5px;
		line-height: 28px;
		padding-top: 12px;
	}
`;
const Counter = styled.div`
	display: flex;
	flex-direction: row;
	place-content: center space-around;
	background-color: rgb(255, 255, 255);
	border: 2px solid rgb(255, 50, 120);
	color: rgb(0, 0, 0);
	opacity: 0.87;
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 0.5px;
	padding: 0px;
	border-radius: 20px;
	line-height: 27px;
	margin-top: 10px;
	width: 100px;
`;
const Cross = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	font-size: 20px;
`;
const H1 = styled.div`
	font-size: 24px;
	color: white;
	font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
		sans-serif;
`;
const HR = styled.div`
	width: 100%;
	height: 2px;
	background: white;
	position: absolute;
	bottom: 0;
`;
const CheckOut = styled.div`
	position: fixed;
	width: 383px;
	bottom: 0;
	height: 200px;
	background: rgb(23, 26, 38);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	top: 78%;
	& h1 {
		display: flex;
		align-items: center;
		cursor: default;
		margin: 0px;
		color: white;
		font-size: 18px;
		font-family: Inter-Regular, "Helvetica Neue", Helvetica, Roboto, Arial,
			sans-serif;
		letter-spacing: 0.5px;
		line-height: 28px;
	}
	& button {
		color: red;
		cursor: pointer;
		font-family: Inter-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
			sans-serif;
		border: 1px solid transparent;
		transition: all 250ms ease 0s;
		display: flex;
		justify-content: center;
		align-items: center;
		background: white;
		font-size: 14px;
		border-radius: 5px;
		padding: 7px 15px;
		font-weight: 700;
		width: 100%;
		margin-top: 12px;
	}
	& button:hover {
		color: black;
	}
`;
const Dot = styled.div`
	width: 10px;
	height: 10px;
	margin: 0px 5px;
	border-radius: 50%;
	background: white;
`;

export const Cart = ({ setCart, changeState }) => {
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
		<div
			style={{
				width: "400px",
				position: "fixed",
				right: "0",
				top: "55px",
				height: "78%",
				overflowY: "scroll",
				transition: "all 1s ease",
				background: "rgb(23,26,38)",
				color: "white",
				padding: "40px 0px",
			}}
		>
			<H1 className="text-center">Your Cart</H1>
			<hr />
			{user.cart.length === 0 ? (
				<div className="empty-cart">
					<div>
						<div className="empty-cart-image">
							<img src={emptyCart} />
						</div>
						<div>Looks like you haven't made any purchases yet</div>
					</div>
					<div
						style={{
							cursor: "pointer",
						}}
						onClick={() => setCart(false)}
						className="back-btn-cart"
					>
						<a>Back</a>
					</div>
				</div>
			) : (
				<div
					style={{
						padding: "20px",
					}}
				>
					{user.cart.map((prod) => {
						return (
							<Product
								setTotalPrice={setTotalPrice}
								key={prod.id}
								changeState={changeState}
								prod={prod}
							/>
						);
					})}
				</div>
			)}
			<CheckOut>
				<h1>
					{user.cart.length} {user.cart.length === 1 ? "item" : "items"}{" "}
					<Dot></Dot> ₹ {totalPrice}
				</h1>
				<Link to="/store/gear/checkout">
					<button>BUY NOW</button>
				</Link>
			</CheckOut>
		</div>
	);
};

function Product({ prod, changeState, setTotalPrice }) {
	const [count, setCount] = useState(prod.count);
	const ChangeCount = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				async function handlePost() {
					const docRef = doc(db, "users", uid);
					const docSnap = await getDoc(docRef);
					let data = docSnap.data();
					let cart = data.cart;
					for (let i = 0; i < cart.length; i++) {
						if (cart[i].id == prod.id) {
							cart[i].count = count;
						}
					}
					await updateDoc(docRef, {
						cart,
					});

					changeState();
				}
				handlePost();
			}
		});
	};

	const removeCart = async () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				async function handlePost() {
					const docRef = doc(db, "users", uid);
					const docSnap = await getDoc(docRef);
					let data = docSnap.data();
					let cart = data.cart;
					for (let i = 0; i < cart.length; i++) {
						if (cart[i].id == prod.id) {
							cart.splice(i, 1);
						}
					}
					console.log(cart);
					await updateDoc(docRef, {
						cart,
					});

					changeState();
				}
				handlePost();
			}
		});
	};
	return (
		<div key={prod.id} className="flex relative pb-10 pt-10">
			<Img>
				<img src={prod.image} alt="" />
			</Img>
			<Text>
				<Cross onClick={removeCart}>
					<img
						src="https://static.cure.fit/assets/images/close-white.svg"
						width="10"
						height="10"
					/>
				</Cross>
				<h2>{prod.tag}</h2>
				<h1>{prod.title}</h1>
				<p>size: {prod.size}</p>
				<span>₹{prod.price}</span>
				<Counter>
					<img
						onClick={() => {
							if (count > 1) {
								setCount(count - 1);
								setTotalPrice((prev) => prev - prod.price);
							}
							setTimeout(ChangeCount, 1000);
						}}
						src="https://static.cure.fit/assets/images/minus.svg"
					/>
					<div>{count}</div>
					<img
						onClick={() => {
							setCount(count + 1);
							setTotalPrice((prev) => prev + prod.price);
							setTimeout(ChangeCount, 1000);
						}}
						src="https://static.cure.fit/assets/images/plus.svg"
					/>
				</Counter>
			</Text>
			<HR></HR>
		</div>
	);
}
