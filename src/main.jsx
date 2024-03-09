import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import { Sugar } from "react-preloaders";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<React.Fragment>
			<App />
			{/* <Sugar /> */}
		</React.Fragment>
	</React.StrictMode>
);
