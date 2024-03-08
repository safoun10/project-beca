import React from "react";
import "../bannerTwo/BannerTwo.css";

const Banner = () => {
	return (
		<div className="mx-auto banner-bg">
			<div className="px-50 row align-items-center justify-content-center w-100">
				<div className="col-11 col-md-6 mx-auto">
					<img
						className="img-fluid bm"
						src="https://i.ibb.co/fNVbxkz/Whats-App-Image-2024-03-08-at-17-05-46-aa13b7f5.jpg"
						alt="boy mascot"
					/>
				</div>
				<div className="col-11 col-md-6 mx-auto text-end ">
					<div className="display-5 text-cursive main-line">
						Learning with <br /> Playful Adventures
					</div>
					<div className="my-3 sub-title">
						Bringing Joy and Engagement to Education through
						Interactive Games, E-books, and Mascots
					</div>
					<div className="btn-custom mt-3 fs-6">Learn More</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
