import React, { useState, InputHTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../../Components/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { InputText, MainText } from "../../Components/Text";
import ProgressBar from "../../Components/ProgressBar";
import { Line } from "../../Components/Line";
import { Button } from "../../Components/BasicButton";
import InputComponent from "../../Components/Input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	valid: boolean;
	value: string;
}

const SetUserName = () => {
	const [userName, setUserName] = useState<string>("");
	const [userNameValid, setUserNameValid] = useState<boolean>(false);
	const [userNameLength, setUserNameLength] = useState<number>(0);
	const navigate = useNavigate();
	const onNextClick = () => {
		console.log(userName);
		navigate("/signup/setroom");
	};
	const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
		setUserNameLength(e.target.value.length);
		const regex = /^.{1,20}$/; // 한글 영문 숫자 1글자 이상 regex
		if (regex.test(e.target.value)) {
			setUserNameValid(true);
		} else {
			setUserNameValid(false);
		}
	};
	return (
		<Container>
			{/* 사용자 이름 설정 */}
			<AnimatePresence>
				<ProgressBar page={1} />
				<CenterContainer
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					exit={{ opacity: 0 }}
				>
					<MainText>독서실명을 알려주세요!</MainText>
					<InputComponent
						value={userName}
						valid={userNameValid}
						length={userNameLength}
						onChange={handleUserName}
					></InputComponent>
					{/* <InputContainer>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								boxSizing: "border-box",
								padding: "10px",
							}}
						>
							<Input
								value={userName}
								valid={userNameValid}
								type="text"
								onChange={handleUserName}
								maxLength={20}
							/>
							<InputText>{userNameLength}/20</InputText>
						</div>
						<Line></Line>
					</InputContainer> */}
					<Button
						valid={userNameValid}
						disabled={!userNameValid}
						onClick={() => onNextClick()}
					>
						다음
					</Button>
				</CenterContainer>
			</AnimatePresence>
		</Container>
	);
};

const CenterContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* height: 100%; */
	gap: 20px;
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
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
	padding: 20px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	*:focus {
		outline: none;
	}
`;

export default SetUserName;
