import { useState } from "react";
import styled from "styled-components";
import { TopNav } from "./TopNav";
import { Button } from "../BasicButton";
import InputComponent from "../Input";
import { CardMainText, CardSubText } from "../Text";
import SingleInput from "../SingleInput";
import { InputWrap, TextWrap } from "./CreateRoom";
type Props = {
	row: string | number;
	rowValid: boolean;
	col: string | number;
	colValid: boolean;
	setRow: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SetRoomSize = (props: Props) => {
	return (
		<>
			<TextWrap>
				<CardMainText>방의 크기를 정해주세요.</CardMainText>
				<CardSubText>
					한 좌석을 1칸으로 생각해주세요. ( 최대 99x99 )
				</CardSubText>
				<CardSubText>
					복도가 있는 경우 책상 한줄로 생각해주세요.
				</CardSubText>
			</TextWrap>
			<InputWrap>
				<SingleInput
					value={props.row}
					valid={props.rowValid}
					onChange={props.setRow}
				/>
				<h1 style={{ padding: "0", margin: "0" }}>X</h1>
				<SingleInput
					value={props.col}
					valid={props.colValid}
					onChange={props.setCol}
				/>
			</InputWrap>
		</>
	);
};

// const TextWrap = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	gap: 10px;
// `;
// const InputWrap = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

export default SetRoomSize;
