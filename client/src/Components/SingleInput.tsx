import React, { useState, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { InputText } from "./Text";
import { Line } from "./Line";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	valid: boolean;
	value: string | number;
}
type Props = {
	value: string | number;
	valid: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SingleInput = (props: Props) => {
	return (
		<InputContainer>
			<Input
				value={props.value || ""}
				valid={props.valid}
				placeholder="N"
				type="text"
				onChange={props.onChange}
				maxLength={2}
			/>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
	box-sizing: border-box;
	border-bottom: 2px solid #705ad4;
`;
const Input = styled.input<InputProps>`
	${(props) => (props.valid ? "color: #705ad4" : "color: #ef0000")};
	caret-color: #705ad4;
	border: none;
	outline: none;
	background-color: transparent;
	box-sizing: border-box;
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	width: 100px;
	*:focus {
		outline: none;
	}
`;
export default SingleInput;
