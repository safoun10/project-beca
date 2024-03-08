import Banner from "./components/banner/Banner";
import BannerTwo from "./components/bannerTwo/BannerTwo";

function App() {
	return (
		<div>
			<div className="bg-color-b1">
				<Banner></Banner>
			</div>
			<div className="text-center display-6 fw-bold my-5">
				Kids Love New and {""}
				<span className="bg-warning px-2 py-1"> Exciting</span> Things
				Why not learning something fun everyday !
			</div>
			<div className="bg-color-b2">
				<BannerTwo></BannerTwo>
			</div>
		</div>
	);
}

export default App;
