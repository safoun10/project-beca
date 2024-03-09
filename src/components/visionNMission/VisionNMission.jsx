import React from "react";
import "./VisionNMission.css";
import { IoIosRocket } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const VisionNMission = () => {
	return (
		<div className="my-5 py-5">
			<div className="row justify-content-center align-items-center ">
				<div className="col-11 col-md-6 mx-auto text-white d-flex flex-column justify-content-center align-items-center text-center visi">
					<div className="display-1 pb-2">
						<IoIosRocket></IoIosRocket>
					</div>
					<div className="fs-4 text-cursive text-center pb-3">
						VISI
					</div>
					<div>Menemani anak dalam Belajar Calistung</div>
				</div>
				<div className="col-11 col-md-6 mx-auto text-white d-flex flex-column justify-content-center align-items-center text-center misi">
					<div className="display-1 pb-2">
						<GoGoal></GoGoal>
					</div>
					<div className="fs-4 text-cursive text-center pb-3">
						MISI
					</div>
					<div>
						Membuat buku interaktif untuk meningkatkan kreativitas
						anak-anak dan memudahkan para orang tua serta guru dalam
						mengajarkan calistung kepada anak-anak usia dini.
					</div>
				</div>
			</div>
		</div>
	);
};

export default VisionNMission;
