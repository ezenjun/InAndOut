import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
	page: Number;
};

const ProgressBar = ({ page }: Props) => {
	return (
		<ProgressContainer
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 0.5 }}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0 },
			}}
			exit={{ opacity: 0 }}
		>
			{page === 1 ? (
				<>
					<Progress>
						<Number active={true}>1</Number>
						<Step active={true}>유저 설정</Step>
					</Progress>
					<Line dash={true}></Line>
					<Progress>
						<Number active={false}>2</Number>
						<Step active={false}>독서실 설정</Step>
					</Progress>
				</>
			) : (
				<>
					<Progress>
						<Number active={false}>1</Number>
						<Step active={false}>유저 설정</Step>
					</Progress>
					<Line dash={true}></Line>
					<Progress>
						<Number active={true}>2</Number>
						<Step active={true}>독서실 설정</Step>
					</Progress>
				</>
			)}
		</ProgressContainer>
	);
};

const ProgressContainer = styled(motion.div)`
	display: flex;
	position: absolute;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	top: 50px;
	width: 30rem;
`;
const Progress = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	font-weight: 700;
	width: 130px;
`;
const Number = styled.div<{ active: Boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) =>
		props.active
			? "background-color: #705ad4"
			: "background-color: #D9D9D9"};
	color: white;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	font-size: 16px;
`;
const Step = styled.div<{ active: Boolean }>`
	display: flex;
	${(props) => (props.active ? "color: black" : "color: #D9D9D9")};
`;

const Line = styled.div<{ dash?: boolean }>`
	border-top: 2px solid #bbbbbb;
	width: 100%;
	margin-bottom: 20px;
	${(props) => props.dash && "border-top: 2px dashed  #bbbbbb"}
`;

export default ProgressBar;
