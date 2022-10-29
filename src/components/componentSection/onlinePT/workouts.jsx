import { Link } from "react-router-dom";

export const Workouts = () => {
	const workoutImg1 =
		"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_485,ar_485:323,c_fit/dpr_2/v1/cult-media/v2web/workouts/5_id/M_CLP_2020-02-04T13:17:17.179Z.png";
	const workoutImg2 =
		"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_485,ar_485:323,c_fit/dpr_2/v1/cult-media/v2web/workouts/98_id/M_CLP_2020-06-09T07:20:12.507Z.png";

	return (
		<div style={{ width: "50rem", marginLeft: "22rem" }}>
			<p
				style={{ fontWeight: "bold", marginBottom: "3rem", fontSize: "1.7rem" }}
			>
				WORKOUTS
			</p>
			<div style={{ display: "flex", gap: "4rem" }}>
				<Link to="#">
					<img src={workoutImg1} style={{ borderRadius: "0.5rem" }}  alt="" />
				</Link>
				<Link to="#">
					<img src={workoutImg2} style={{ borderRadius: "0.5rem" }}  alt="" />
				</Link>
			</div>
		</div>
	);
};
