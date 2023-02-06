import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../Components/Container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainText, TimeText } from "../../Components/Text";

const SignUp = () => {
	const [step, setStep] = useState(1);
	const [seconds, setSeconds] = useState(5);

	const navigate = useNavigate();

	useEffect(() => {
		const countdown = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 1) {
				clearInterval(countdown);
				navigate("./username");
			}
		}, 1000);
		return () => clearInterval(countdown);
	}, [seconds]);
	return (
		<Container>
			<AnimatePresence>
				{/* 환영합니다 */}
				{step === 1 && (
					<>
						<motion.div
							key="setroom"
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
							<MainText>환영합니다</MainText>
						</motion.div>
						{seconds > 0 && <TimeText>{seconds}</TimeText>}
					</>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default SignUp;
