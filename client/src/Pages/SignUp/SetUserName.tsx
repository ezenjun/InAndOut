import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../../Components/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {};

const SetUserName = (props: Props) => {
	const navigate = useNavigate();
	const onNextClick = () => {
		navigate("/signup/setroom");
	};
	return (
		<Container>
			{/* 사용자 이름 설정 */}
			<AnimatePresence>
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
					<div className="progressBar">
						<div>1 유저설정</div>
						<div>2 독서실설정</div>
					</div>
					<div>
						<MainText>독서실명을 알려주세요!</MainText>
						<input type="text" maxLength={20}></input>
						<button onClick={() => onNextClick()}>다음</button>
					</div>
				</motion.div>
			</AnimatePresence>
		</Container>
	);
};

const MainText = styled.h1`
	font-size: 3rem;
	color: #705ad4;
`;
export default SetUserName;
