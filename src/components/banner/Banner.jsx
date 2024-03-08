import React from "react";
import "../banner/Banner.css";

const Banner = () => {
	return (
		<div className="mx-auto banner-bg">
			<div className="px-50 row align-items-center justify-content-center ">
				<div className="col-11 col-md-6 mx-auto">
					<div className="edition text-cursive">2024 EDITION</div>
					<div className="display-5 text-cursive main-line">
						Designing Digital <br /> Books for kids
					</div>
					<div className="my-3 sub-title">
						Transforming Traditional Learning with Magnetic Puzzles,
						Interactive Writing, and Animated Pronunciations
					</div>
					<div className="btn-custom mt-3 fs-6">Learn More</div>
				</div>
				<div className="col-11 col-md-6 mx-auto">
					<img
						className="img-fluid gm"
						src="https://i.postimg.cc/nhpCcSQp/Whats-App-Image-2024-03-08-at-17-05-46-90f52dd4.jpg"
						alt="beca logo"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
