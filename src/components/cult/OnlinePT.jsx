import React from "react";
import { Banner } from "../componentSection/banner/banner";
import { Timer } from "../componentSection/timer/Timer";
import keyFeatures from "../componentSection/images/key-features.png";
import { MembershipSection } from "../componentSection/onlinePT/membership-section";
import { Workouts } from "../componentSection/onlinePT/workouts";
import { CustomerSpeak } from "../componentSection/onlinePT/customerSpeak";

export const OnlinePT = () => {
	const promoStyle = {
		title: "MEMBERSHIP",
		subHeading: "MEMBERSHIP",
		style: { background: "#586284", height: "450px" },
	};
	const image = {
		src:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/9ae79620-c3f3-4eeb-bba7-33781d65478e.png",
	};
	const timeData = {
		img:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:100/dpr_2/image/vm/16b3967b-5c59-4cff-a6f7-e6521acdfbff.png",
		arrow: "https://static.cure.fit/assets/images/back-arrow-pink.svg",
	};
	const tryFree =
		"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:100/dpr_2/image/vm/84544577-584c-459d-b25c-134076c4b4c9.png";
	return (
		<div>
			<Banner image={image} />
			<Timer timeData={timeData} />
			<img src={tryFree} className="w-4/5 m-auto mt-20 rounded-md" alt="" />
			<MembershipSection promoStyle={promoStyle} />
			<img src={keyFeatures} alt="" className="py-20" />
			<Workouts />
			<CustomerSpeak />
		</div>
	);
};
