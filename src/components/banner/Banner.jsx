import React from "react";
import "../banner/Banner.css";

const Banner = () => {
	return (
		<div className="mx-auto banner-bg">
			<div className="px-50 row align-items-center justify-content-center w-100">
				<div className="col-11 col-md-6 mx-auto">
					<div className="edition text-cursive">2024 EDITION</div>
					<div className="display-5 text-cursive main-line">
						Merancang Buku Calistung Untuk Anak-Anak
					</div>
					<div className="my-3 sub-title">
						Inovasi buku Calistung yang berbada dari buku Calistung terdahulu
					</div>
					<div className="btn-custom mt-3 fs-6">Learn More</div>
				</div>
				<div className="col-11 col-md-6 mx-auto">
					<img
						className="img-fluid gm"
						src="https://i.ibb.co/1fnYNXc/Whats-App-Image-2024-03-08-at-17-05-46-90f52dd4.jpg"
						alt="girl mascot"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
