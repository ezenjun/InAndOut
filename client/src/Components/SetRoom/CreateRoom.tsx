import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { TopNav } from "./TopNav";
import { Button } from "../BasicButton";
import SetRoomName from "./SetRoomName";
import SetRoomSize from "./SetRoomSize";
import SetRoomGrid from "./SetRoomGrid";
import ConfirmRoomGrid from "./ConfirmRoomGrid";
import { Container } from "../../Components/Container";
import { MainText, SubText, TimeText } from "../../Components/Text";
import { useNavigate } from "react-router-dom";
type Props = {};

type Grid = boolean[][];
const CreateRoom = (props: Props) => {
	const navigate = useNavigate();
	const [progress, setProgress] = useState<number>(1);
	// roomName variable
	const [roomName, setRoomName] = useState<string>("");
	const [roomNameValid, setRoomNameValid] = useState<boolean>(false);
	const [roomNameLength, setRoomNameLength] = useState<number>(0);
	const handleRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRoomName(e.target.value);
		setRoomNameLength(e.target.value.length);
		const regex = /^.{1,20}$/; // 한글 영문 숫자 1글자 이상 regex
		if (regex.test(e.target.value)) {
			setRoomNameValid(true);
		} else {
			setRoomNameValid(false);
		}
	};
	// roomSize variable
	const [rows, setRows] = useState<number>(0);
	const [rowValid, setRowValid] = useState<boolean>(false);
	const [cols, setCols] = useState<number>(0);
	const [colValid, setColValid] = useState<boolean>(false);
	const setRowFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (parseInt(e.target.value) > 0) {
			setRows(parseInt(e.target.value));
			setRowValid(true);
		} else {
			setRows(0);
			setRowValid(false);
		}
	};
	const setColFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (parseInt(e.target.value) > 0) {
			setCols(parseInt(e.target.value));
			setColValid(true);
		} else {
			setCols(0);
			setColValid(false);
		}
	};
	const [roomGrid, setRoomGrid] = useState<Grid>(new Array(rows));

	const onNextClick = () => {
		setProgress(progress + 1);
	};
	const onComplete = () => {
		navigate("/home");
	};

	useEffect(() => {
		if (rows > 0 && cols > 0) {
			const rowsArray = new Array(rows);
			for (let i = 0; i < rows; i++) {
				rowsArray[i] = new Array(cols).fill(true);
			}
			setRoomGrid(rowsArray);
		}
	}, [rows, cols]);
	return (
		<>
			{progress !== 5 ? (
				<>
					{progress < 3 ? (
						<motion.div
							key="smallCard"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1.0 }}
							variants={{
								hidden: { opacity: 0, y: 100 },
								visible: { opacity: 1, y: 0 },
							}}
							exit={{ opacity: 0 }}
						>
							<SmallCard>
								<TopNav>
									{progress !== 1 ? (
										<div
											onClick={() =>
												setProgress(progress - 1)
											}
										>
											이전
										</div>
									) : (
										<></>
									)}
								</TopNav>
								<IndicationWrap>
									<IndicationBar progress={progress * 25} />
								</IndicationWrap>
								<InnerContainer>
									{progress === 1 && (
										<>
											<SetRoomName
												roomName={roomName}
												roomNameValid={roomNameValid}
												roomNameLength={roomNameLength}
												handleRoomName={handleRoomName}
											/>
											<Button
												valid={roomNameValid}
												onClick={() => onNextClick()}
											>
												다음
											</Button>
										</>
									)}
									{progress === 2 && (
										<>
											<SetRoomSize
												row={rows}
												rowValid={rowValid}
												col={cols}
												colValid={colValid}
												setRow={setRowFunction}
												setCol={setColFunction}
											/>
											<Button
												valid={colValid && rowValid}
												onClick={() => onNextClick()}
											>
												다음
											</Button>
										</>
									)}
								</InnerContainer>
							</SmallCard>
						</motion.div>
					) : (
						<LargeCard
							key="largeCard"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1.0 }}
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 },
							}}
							exit={{ opacity: 0 }}
						>
							<TopNav>
								{progress !== 1 ? (
									<div
										onClick={() =>
											setProgress(progress - 1)
										}
									>
										이전
									</div>
								) : (
									<></>
								)}
							</TopNav>
							<IndicationWrap>
								<IndicationBar progress={progress * 25} />
							</IndicationWrap>
							<InnerContainer>
								{progress === 3 && (
									<>
										<SetRoomGrid
											roomGrid={roomGrid}
											setRoomGrid={setRoomGrid}
										></SetRoomGrid>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												width: "100%",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													width: "50%",
												}}
											>
												<Button
													valid={roomNameValid}
													onClick={() =>
														onNextClick()
													}
												>
													다음
												</Button>
											</div>
										</div>
									</>
								)}
								{progress === 4 && (
									<>
										<ConfirmRoomGrid
											roomGrid={roomGrid}
										></ConfirmRoomGrid>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												width: "100%",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													width: "50%",
												}}
											>
												<Button
													valid={roomNameValid}
													onClick={() =>
														onNextClick()
													}
												>
													저장
												</Button>
											</div>
										</div>
									</>
								)}
							</InnerContainer>
						</LargeCard>
					)}
				</>
			) : (
				<Container>
					<AnimatePresence>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1.0 }}
							variants={{
								hidden: { opacity: 0, y: 100 },
								visible: { opacity: 1, y: 0 },
							}}
							exit={{ opacity: 0 }}
						>
							<SubText>축하합니다!</SubText>
							<MainText>{roomName}이 생성되었습니다</MainText>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginTop: "80px",
								}}
							>
								<Button
									valid={roomNameValid}
									onClick={() => onComplete()}
								>
									시작하기
								</Button>
							</div>
						</motion.div>
					</AnimatePresence>
				</Container>
			)}
		</>
	);
};

const SmallCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 540px;
	height: 600px;
	background-color: white;
	border-radius: 20px;
	box-sizing: border-box;
`;
const LargeCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	position: relative;
	top: 50px;
	width: 1300px;
	height: 700px;
	background-color: white;
	border-radius: 20px;
	box-sizing: border-box;
`;
const IndicationWrap = styled.div`
	width: 100%;
	height: 0.125rem;
	background-color: #fbf6ff;
`;
const IndicationBar = styled.div<{ progress: number }>`
	width: ${(props) => props.progress}%;
	height: 2px;
	background-color: #705ad4;
	transition: width 1s;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 30px;
	box-sizing: border-box;
	overflow: hidden;
`;

export const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 10px;
`;
export const InputWrap = styled.div`
	display: flex;
	justify-content: center;
`;
export default CreateRoom;
