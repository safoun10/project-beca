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
				Why choosing us ?
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
							<div className="fs-2 text-cursive pb-3">BUKU !</div>
							<div>
								Buku kami menawarkan pengalaman belajar unik
								yang memadukan pembelajaran dan bermain.
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
						date="🚀🚀"
						iconStyle={{
							background: "rgb(255, 193, 7)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								TUJUAN !
							</div>
							<div>
								Hal ini bertujuan untuk membuat pembelajaran
								lebih menarik dibandingkan metode tradisional
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
						date="🤩🤩"
					>
						<div>
							<div className="fs-2 text-cursive pb-3">SERU !</div>
							<div>
								BECA menggabungkan aktivitas menyenangkan
								seperti teka-teki huruf dan angka magnetik untuk
								latihan membaca dan berhitung.
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
						date="📖"
						iconStyle={{
							background: "rgb(255, 193, 7)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								MEMPELAJARI !
							</div>
							<div>
								Belajar menulis bersifat interaktif dengan
								kertas film matte dan karton tebal untuk
								menjiplak gambar.
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
						date="🔥🔥"
					>
						<div>
							<div className="fs-2 text-cursive pb-3">LAGI !</div>
							<div>
								Tulisan yang dapat dihapus memungkinkan adanya
								kesalahan dan perbaikan.
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
						date="📱"
						iconStyle={{
							background: "rgb(255, 193, 7)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								EBUKU !
							</div>
							<div>
								Video e-book dengan animasi huruf dan angka
								dapat diakses melalui kode QR.
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
						date="😲😲"
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								MENARIK !
							</div>
							<div>
								Tombol suara memutar lagu {" '"}Belajar
								Mengenali Huruf dan Angka{"' "} yang catchy.
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
						date="👦👧"
						iconStyle={{
							background: "rgb(255, 193, 7)",
							color: "#fff",
						}}
					>
						<div>
							<div className="fs-2 text-cursive pb-3">
								MASCOT !
							</div>
							<div>
								BECA bahkan menampilkan maskot yang menarik bagi
								anak laki-laki dan perempuan.
							</div>
						</div>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						iconStyle={{
							background: "rgb(33, 37, 41)",
							color: "#fff",
						}}
						// icon={<StarIcon />}
					/>
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Products;
