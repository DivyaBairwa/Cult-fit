import React from "react";
import { Banner } from "../componentSection/banner/banner";
import { Timer } from "../componentSection/timer/Timer";
import { Trails } from "../componentSection/trails/Trails";

import { PriceList } from "../componentSection/priceList/PriceList";

export const Gyms = () => {
	const promoStyle = {
		title: "cultpass ELITE",
		subHeading: "Unlimited access to all centers, gyms and live workouts",
		style: { background: "#586284", height: "450px" },
	};
	const image = {
		src:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/8493f704-baba-48e4-9ae6-180ca10f8c5c.png",
	};
	const timeData = {
		img:
			"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:100/dpr_2/image/vm/4df19379-6ae5-4d76-8b07-35f46c80f921.png",
		arrow: "https://static.cure.fit/assets/images/back-arrow-pink.svg",
	};
	return (
		<div>
			<Banner image={image} />
			<Timer timeData={timeData} />
			<Trails />
			<div className="width-1200">
				<h1 className="text-5xl my-10 mt-40">What You Get</h1>
				<div className="flex">
					<img
						width="25%"
						src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_176,ar_660:300,c_fit/dpr_2/image/vm/2e3e1096-d010-4b98-9153-a8da0d768782.png"
						alt=""
					/>
					<img
						width="25%"
						src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_176,ar_660:300,c_fit/dpr_2/image/vm/f2913cfc-3e11-441a-9e86-e8118b97bc52.png"
						alt=""
					/>
					<img
						width="25%"
						src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_176,ar_660:300,c_fit/dpr_2/image/vm/c359a340-607b-4df3-9a38-c2bcab421326.png"
						alt=""
					/>
				</div>
			</div>
			<PriceList promoStyle={promoStyle} />
		</div>
	);
};
