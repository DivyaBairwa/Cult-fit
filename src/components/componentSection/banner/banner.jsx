import React from "react";

export const Banner = ({ image }) => {
	return (
		<div>
			<img className="w-full" src={image.src} alt="" />
		</div>
	);
};
