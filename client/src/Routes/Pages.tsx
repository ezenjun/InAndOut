import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Auth from "../Pages/Login/Auth";
import Home from "../Pages/Home/Home";
import Landing from "../Pages/Landing/Landing";
import SignUp from "../Pages/SignUp/SignUp";
import SetUserName from "../Pages/SignUp/SetUserName";
import SetRoom from "../Pages/SignUp/SetRoom";

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="auth/kakao/callback" element={<Auth />} />
				<Route path="/home" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signup/username" element={<SetUserName />} />
				<Route path="/signup/setroom" element={<SetRoom />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
