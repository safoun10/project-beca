import React from "react";
import "../products/Products.css";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Products = () => {
	return (
		<div>
			<hr />
			<div className="display-5 text-cursive text-center py-4">
				Kelebiahan buku BECA ?
			</div>
			<hr />
			<div className="mb-5">
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 37, 41)",
							color: "#fff",
						}}
						contentArrowStyle={{
							borderRight: "7px solid  rgb(33, 37, 41)",
						}}
						iconStyle={{
							background: "rgb(33, 37, 41)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								PUZZLE MAGNET !
							</div>
							<div>Terdapat puzzle magnet angka dan huruf</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(255, 193, 7)",
							color: "rgb(33, 37, 41)",
						}}
						contentArrowStyle={{
							borderRight: "7px solid  rgb(255, 193, 7)",
						}}
						iconStyle={{
							background: "rgb(255, 193, 7)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								REKAMAN SUARA !
							</div>
							<div>
								Terdapat rekaman suara pada section membaca
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(33, 37, 41)",
							color: "#fff",
						}}
						contentArrowStyle={{
							borderRight: "7px solid  rgb(33, 37, 41)",
						}}
						iconStyle={{
							background: "rgb(33, 37, 41)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								VISUALIASI !
							</div>
							<div>
								Teradapa gambar kreatif penunjang visualisasi
								konsep
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(255, 193, 7)",
							color: "rgb(33, 37, 41)",
						}}
						contentArrowStyle={{
							borderRight: "7px solid  rgb(255, 193, 7)",
						}}
						iconStyle={{
							background: "rgb(255, 193, 7)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								BAHAN KERTAS !
							</div>
							<div>
								Kertas dilapisi film matte yang dapat di tulis
								berulang kali
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						iconStyle={{
							background: "rgb(33, 37, 41)",
							color: "#fff",
						}}
					/>
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Products;
