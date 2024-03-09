import AboutBeca from "./components/aboutBeca/AboutBeca";
import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import BannerTwo from "./components/bannerTwo/BannerTwo";
import KidsLike from "./components/kidsLike/KidsLike";
import Para from "./components/para/Para";
import Products from "./components/products/Products";

function App() {
	return (
		<div className="mx-auto">
			<div className="bg-color-b1 mx-auto">
				<Banner></Banner>
			</div>
			<div className="py-5">
				<KidsLike></KidsLike>
			</div>
			<div className="bg-color-b2 mb-5">
				<BannerTwo></BannerTwo>
			</div>
			<div>{/* <Para></Para> */}</div>
			<div>
				<AboutBeca></AboutBeca>
			</div>
			<div>
				<Products></Products>
			</div>
			<div>
				<AboutUs></AboutUs>
			</div>
		</div>
	);
}

export default App;
