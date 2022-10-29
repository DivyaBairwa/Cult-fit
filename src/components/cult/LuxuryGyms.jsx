import React from "react";
import { Banner } from "../componentSection/banner/banner";
import "../../App.css";

export const LuxuryGyms = () => {
	const image = {
		src:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/c9c20c59-22da-444c-9a92-fb2c88850af3.jpg",
	};
	return (
		<div>
			<Banner image={image} />
			<p style={{ fontSize: "2rem", marginLeft: "20rem", marginTop: "10rem" }}>
				SELECT A GYM
			</p>
			<p
				style={{
					marginLeft: "20rem",
					marginTop: "2rem",
					fontSize: "1.4rem",
					marginBottom: "1.5rem",
				}}
			>
				Join a gym of your choice
			</p>
			<div
				style={{
					cursor: "pointer",
					width: "44rem",
					marginLeft: "20rem",
					marginBottom: "7rem",
					lineHeight: "5rem",
					padding: "2rem",
					height: "58rem",
					borderRadius: "1rem",
				}}
				className="selectGym"
			>
				<div
					style={{
						width: "40rem",
						borderRadius: "1rem",
					}}
				>
					<img
						src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_377,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/gymfit/centers/CENTER6/web_clp.png"
						style={{ width: "100%", borderRadius: "1rem" }}
					/>
				</div>
				<h3 style={{ fontSize: "2rem", marginTop: "1rem" }}>
					Volt Fitness - Indiranagar, Banglore
				</h3>
				<div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
					<div
						style={{
							borderRadius: "1rem",
							paddingLeft: "0.7rem",
							paddingRight: "0.7rem",
							color: "gray",
							background: "#eae8f4",
						}}
					>
						Gym Access
					</div>
					<div
						style={{
							borderRadius: "1rem",
							paddingLeft: "0.7rem",
							paddingRight: "0.7rem",
							color: "gray",
							background: "#eae8f4",
						}}
					>
						Group Workouts
					</div>
					<div
						style={{
							borderRadius: "1rem",
							paddingLeft: "0.7rem",
							paddingRight: "0.7rem",
							color: "gray",
							background: "#eae8f4",
						}}
					>
						Personal Training
					</div>
				</div>
				<p style={{ fontSize: "2rem", marginTop: "3rem" }}>Starting ₹22990</p>
			</div>
		</div>
	);
};
