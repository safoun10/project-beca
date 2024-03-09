import React from "react";
import "../aboutUs/AboutUs.css";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { TbBrandShopee } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";

const AboutUs = () => {
	return (
		<div className="pt-5 mb-5 card-custom-au">
			<div className="text-center display-5 text-cursive mb-3 ">
				FIND <span className="bg-body-secondary px-2">US</span> ON
			</div>
			<div className="row justify-content-center align-items-center w-100 mx-auto ">
				<div className="col-11 col-md-4 mx-auto">
					<img
						src="https://i.ibb.co/5rnNy9x/download.jpg"
						alt="logo"
						className="img-fluid"
					/>
				</div>
				<div className="col-11 col-md-8 mx-auto">
					<div className="row gap-3 w-100 ">
						<a
							href="mailto:bukueksplorasicalistunganak@gmail.com"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="fs-3 d-flex justify-content-center align-items-center ">
									<IoMailOpenOutline></IoMailOpenOutline>{" "}
								</div>
								<div className="fs-5 ps-2"> Email</div>
							</div>
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=61557076863822&mibextid=ZbWKwL"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center w-100">
								<div className="fs-3 d-flex justify-content-center align-items-center ">
									<RiFacebookCircleLine></RiFacebookCircleLine>{" "}
								</div>
								<div className="fs-5 ps-2"> Facebook </div>
							</div>
						</a>
						<a
							href="http://instagram.com/beca.journey_"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="fs-4 d-flex justify-content-center align-items-center ">
									<FaInstagram></FaInstagram>{" "}
								</div>
								<div className="fs-5 ps-2"> Instagram </div>
							</div>
						</a>
						<a
							href="https://tiktok.com/@beca.journey"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="fs-4 d-flex justify-content-center align-items-center ">
									<FaTiktok></FaTiktok>{" "}
								</div>
								<div className="fs-5 ps-2"> Tiktok </div>
							</div>
						</a>
						<a
							href="https://www.youtube.com/@Beca.Journey"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="fs-3 d-flex justify-content-center align-items-center ">
									<FiYoutube></FiYoutube>{" "}
								</div>
								<div className="fs-5 ps-2"> Youtube </div>
							</div>
						</a>
						<a
							href="https://shopee.co.id/beca.journey_"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="fs-3 d-flex justify-content-center align-items-center ">
									<TbBrandShopee></TbBrandShopee>{" "}
								</div>
								<div className="fs-5 ps-2"> shopee </div>
							</div>
						</a>
						<a
							href="http://www.tokopedia.com/beca-journey"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="d-flex justify-content-center align-items-center ">
									<img
										src="https://i.ibb.co/mJsPXvB/download.png"
										alt=""
										className="tokopedia"
									/>
								</div>
								<div className="fs-5 ps-2"> TOKOPEDIA </div>
							</div>
						</a>
						<a
							href="tel:+6285893588764"
							className="text-decoration-none text-dark col-5  me-3"
							target="_blank"
						>
							<div className="social-card d-flex justify-content-center align-items-center ">
								<div className="fs-5 d-flex justify-content-center align-items-center ">
									<FaPhone></FaPhone>{" "}
								</div>
								<div className="fs-5 ps-2"> Phone </div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
