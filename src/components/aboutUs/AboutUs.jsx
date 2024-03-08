import React from "react";
import "../aboutUs/AboutUs.css";

const AboutUs = () => {
	return (
		<div className="pt-5 mb-5 card-custom-au">
			<div className="text-center display-5 text-cursive mb-3 ">
				FIND <span className="bg-body-secondary px-2">US</span> ON
			</div>
			<div className="row justify-content-center align-items-center w-100">
				<div className="col-11 col-md-4 mx-auto">
					<img
						src="https://i.ibb.co/5rnNy9x/download.jpg"
						alt="logo"
						className="img-fluid"
					/>
				</div>
				<div className="col-11 col-md-8 mx-auto">
					<div className="row gap-3">
						<a href="" className="text-decoration-none text-dark ">
							<div className="col-5 social-card">Email</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
