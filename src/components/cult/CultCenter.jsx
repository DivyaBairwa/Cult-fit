import React from "react";
import { Banner } from "../componentSection/banner/banner";
import { Timer } from "../componentSection/timer/Timer";
import { Trails } from "../componentSection/trails/Trails";
import { PromoVideo } from "../componentSection/promoVideo/PromoVideo";
import { PriceList } from "../componentSection/priceList/PriceList";

export const CultCenter = () => {
	const promoStyle = {
		title: "cultpass ELITE",
		subHeading: "Unlimited access to all centers, gyms and live workouts",
		style: { background: "#586284", height: "450px" },
	};
	const image = {
		src:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/e60fc92f-0b4f-4ac3-9add-ee3661c127ac.png",
	};
	const timeData = {
		img:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:100/dpr_2/image/vm/6754cffd-206c-4bf5-bf64-1a9c835fa7ee.png",
		arrow: "https://static.cure.fit/assets/images/back-arrow-pink.svg",
	};
	return (
		<div>
			<Banner image={image} />
			<Timer timeData={timeData} />
			<Trails />
			<PromoVideo />
			<PriceList promoStyle={promoStyle} />
		</div>
	);
};
