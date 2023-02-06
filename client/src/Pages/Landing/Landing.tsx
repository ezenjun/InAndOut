import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Landing = () => {
	let navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token === "yes") {
			navigate("/login");
		}
	});

	return (
		<Container>
			{/* image */}
			<div>Landing</div>
			{/* login */}
			<div>
				<button onClick={() => navigate("/login")}>login</button>
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100vh;
`;

export default Landing;
