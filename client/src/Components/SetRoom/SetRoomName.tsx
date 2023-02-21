import { useState } from "react";
import styled from "styled-components";
import { TopNav } from "./TopNav";
import { Button } from "../BasicButton";
import InputComponent from "../Input";
import { CardMainText, CardSubText } from "../Text";
import { InputWrap, TextWrap } from "./CreateRoom";
type Props = {
	roomName: string;
	roomNameValid: boolean;
	roomNameLength: number;
	handleRoomName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SetRoomName = (props: Props) => {
	return (
		<>
			<TextWrap>
				<CardMainText>방의 이름을 정해주세요.</CardMainText>
				<CardSubText>
					특수문자 없이 20글자 내외로 정해주세요.
				</CardSubText>
			</TextWrap>
			<InputWrap>
				<InputComponent
					value={props.roomName}
					valid={props.roomNameValid}
					length={props.roomNameLength}
					small={true}
					onChange={props.handleRoomName}
				></InputComponent>
			</InputWrap>
		</>
	);
};


export default SetRoomName;
