import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
	let navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token === "yes") {
			navigate("/login");
		}
	}, []);

	return <div>Landing</div>;
};

export default Landing;
