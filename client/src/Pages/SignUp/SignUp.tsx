import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../Components/Container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainText, TimeText } from "../../Components/Text";

const SignUp = () => {
	const [seconds, setSeconds] = useState(3);

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
				<TimeText>
					{seconds > 0 && (
						<motion.p
							key="timer"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1.0 }}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							exit={{ opacity: 0 }}
						>
							{seconds}
						</motion.p>
					)}
				</TimeText>
			</AnimatePresence>
		</Container>
	);
};

export default SignUp;
