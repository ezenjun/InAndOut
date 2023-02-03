import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Auth from "../Pages/Login/Auth";
import Home from "../Pages/Home/Home";
import Landing from "../Pages/Landing/Landing";

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="auth/kakao/callback" element={<Auth />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
