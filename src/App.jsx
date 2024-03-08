import Banner from "./components/banner/Banner";
import BannerTwo from "./components/bannerTwo/BannerTwo";
import KidsLike from "./components/kidsLike/KidsLike";

function App() {
	return (
		<div className="mx-auto">
			<div className="bg-color-b1 mx-auto">
				<Banner></Banner>
			</div>
			<div className="py-5">
				<KidsLike></KidsLike>
			</div>
			<div className="bg-color-b2">
				<BannerTwo></BannerTwo>
			</div>
		</div>
	);
}

export default App;
