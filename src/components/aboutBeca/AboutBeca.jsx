import React from "react";
import "../aboutBeca/AboutBeca.css";

const AboutBeca = () => {
	return (
		<div className="my-5 py-5">
			<div className="row justify-content-center align-items-center">
				<div className="col-11 col-md-8 mx-auto">
					<div className="display-3 text-cursive mb-4">
						TENTANG{" "}
						<span className="text-bg-warning px-2 text-white">
							BECA
						</span>
					</div>
					<div className="fs-6 text-secondary about-beca">
						Pada buku ini akan disajikan pembelajaran yang menarik
						antara perpaduan belajar dan bermain untuk mengatasi
						pembelajaran yang terbilang konvensional dan belum
						interaktif. Oleh karena itu,{" "}
						<span className="fw-bold">
							Buku Eksplorasi Calistung Anak (BECA)
						</span>{" "}
						hadir. Beberapa keseruan dalam buku, yaitu terdapat
						permainan puzzle magnet huruf dan angka untuk belajar
						membaca dan menghitung difasilitasi Box penyimpan
						puzzle, untuk belajar menulis terdapat lembaran kertas
						Film matte dan karton tebal interaktif agar anak-anak
						dapat menulis sesuai dengan gambar yang ada, tentunya
						tulisan tersebut bisa dihapus kembali. Melampirkan kode
						QR di dalamnya terdapat e-book vidio pelafalan huruf dan
						angka dalam bentuk animasi. Difasilitasi tombol suara
						yang berisi lagu Belajar Mengenal Huruf dan Angka.
						Terdapat juga Maskot anak laki-laki dan anak perempuan.
						Buku ini mendukung SDGs ke 4 yaitu tentang Quality
						Education Target 4.6 literasi dan numerasi universal
					</div>
				</div>
				<div className="col-11 col-md-4 mx-auto d-flex justify-content-center align-items-center ">
					<img
						className="img-fluid"
						src="https://i.ibb.co/vqbLb6D/Whats-App-Image-2024-03-08-at-17-05-45-6701eafe.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutBeca;
