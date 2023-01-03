import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Auth from "../Pages/Login/Auth";
import Home from "../Pages/Home/Home";

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="auth/kakao/callback" element={<Auth />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
