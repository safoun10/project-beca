import React from "react";
import "./KidsLike.css";

const KidsLike = () => {
	return (
		<div className="row justify-content-center align-items-center my-5 card-1">
			<div className="text-center my-5 col-11 col-md-6 mx-auto lh-5">
				Anak-anak menyukai hal-hal baru yang {""}
				<span className="bg-cs-yellow px-2 py-1"> Meanrik</span> , lalu
				mengapa tidak mempelajari sesuatu yang menyenangkan setiap hari
				?
			</div>
			<div className="col-11 col-md-6 mx-auto">
				<img
					className="img-fluid gg-img"
					src="https://i.ibb.co/QcHDPG5/istockphoto-1591209868-612x612.jpg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default KidsLike;
