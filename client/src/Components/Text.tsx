import styled from "styled-components";

export const MainText = styled.h1`
	font-size: 3rem;
	color: #705ad4;
`;
export const SubText = styled.p`
	text-align: center;
	font-size: 1.5rem;
	color: #8d8d8d;
`;
export const CardMainText = styled.h1`
	font-size: 2rem;
	color: black;
	font-weight: 800;
	padding: 0;
	margin: 0;
`;
export const CardSubText = styled.p`
	font-size: 1rem;
	color: #8d8d8d;
	font-weight: 600;
	padding: 0;
	margin: 0;
`;
export const TimeText = styled.div`
	position: absolute;
	bottom: 30px;
	font-size: 1.5rem;
	color: #705ad4;
`;
export const InputText = styled.p<{ small?: boolean }>`
	text-align: center;
	${(props) => (props.small ? "font-size: 18px" : "font-size: 1.5rem")};
	color: #8d8d8d;
	margin: 0;
`;
