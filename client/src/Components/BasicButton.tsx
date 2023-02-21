import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	valid: boolean;
}
export const Button = styled.button<buttonProps>`
	${(props) =>
		props.valid
			? "background-color: #705ad4"
			: "background-color: #DADADA"};
	width: 100%;
	box-sizing: border-box;
	border-radius: 64px;
	/* margin: 0 10px; */
	padding: 12px;
	border: none;
	color: #ffffff;
	font-size: 20px;
	font-weight: 700;
	margin-top: 10px; ;
`;
