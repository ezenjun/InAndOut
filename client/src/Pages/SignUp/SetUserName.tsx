import React, {
	useState,
	InputHTMLAttributes,
	ButtonHTMLAttributes,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../../Components/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { InputText, MainText } from "../../Components/Text";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	valid: boolean;
	value: string;
}
interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	valid: boolean;
}

const SetUserName = () => {
	const [userName, setUserName] = useState<string>("");
	const [userNameValid, setUserNameValid] = useState<boolean>(false);
	const [userNameLength, setUserNameLength] = useState<number>(0);
	const navigate = useNavigate();
	const onNextClick = () => {
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
				<ProgressBar>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						exit={{ opacity: 0 }}
					>
						1 유저 설정
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						exit={{ opacity: 0 }}
					>
						2 독서실 설정
					</motion.div>
				</ProgressBar>
				<motion.div
					key="setUserName"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 100 },
						visible: { opacity: 1, y: 0 },
					}}
					exit={{ opacity: 0 }}
				>
					<CenterContainer>
						<MainText>독서실명을 알려주세요!</MainText>
						<InputContainer>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									boxSizing: "content-box",
								}}
							>
								<Input
									value={userName}
									valid={userNameValid}
									type="text"
									onChange={handleUserName}
									maxLength={20}
								/>
								<InputText>({userNameLength}/20)</InputText>
							</div>
							<Line></Line>
						</InputContainer>
						<Button
							valid={userNameValid}
							disabled={!userNameValid}
							onClick={() => onNextClick()}
						>
							다음
						</Button>
					</CenterContainer>
				</motion.div>
			</AnimatePresence>
		</Container>
	);
};

const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 20px;
`;
const ProgressBar = styled.div`
	display: flex;
	position: absolute;
	justify-content: space-between;
	width: 30%;
	top: 50px;
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
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
	padding: 20px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	box-sizing: border-box;
	*:focus {
		outline: none;
	}
`;
const Line = styled.div`
	height: 2px;
	width: 100%;
	background-color: #bbbbbb;
	margin-bottom: 20px;
`;
const Button = styled.button<buttonProps>`
	${(props) =>
		props.valid
			? "background-color: #705ad4"
			: "background-color: #DADADA"};
	width: 100%;
	border-radius: 64px;
	padding: 12px;
	border: none;
	color: #ffffff;
	font-size: 20px;
	font-weight: 700;
`;
export default SetUserName;
