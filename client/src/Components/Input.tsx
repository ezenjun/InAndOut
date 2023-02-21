import React, { useState, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { InputText } from "./Text";
import { Line } from "./Line";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	valid: boolean;
	value: string;
	small?: boolean;
}
type Props = {
	value: string;
	valid: boolean;
	length?: number;
	small?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputComponent = (props: Props) => {
	return (
		<InputContainer small={props.small}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					boxSizing: "border-box",
					padding: "10px",
					width: "100%",
				}}
			>
				<Input
					value={props.value}
					valid={props.valid}
					type="text"
					onChange={props.onChange}
					maxLength={20}
					small={props.small}
				/>
				<InputText small={props.small}>{props.length}/20</InputText>
			</div>
			<Line></Line>
		</InputContainer>
	);
};

const InputContainer = styled.div<{ small?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	${(props) => (props.small ? "width: 80%" : "width: 100%")};
`;
const Input = styled.input<InputProps>`
	${(props) =>
		props.valid || props.value.length === 0
			? "color: #705ad4"
			: "color: #ef0000"};
	border: none;
	outline: none;
	background-color: transparent;
	height: 30px;
	width: 100%;
	margin: 8px 0 0 0;
	box-sizing: border-box;
	${(props) => (props.small ? "font-size: 18px" : "font-size: 1.5rem")};
	font-weight: 700;
	text-align: center;
	*:focus {
		outline: none;
	}
`;

export default InputComponent;
