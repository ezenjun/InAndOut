import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../Components/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainText, SubText, TimeText } from "../../Components/Text";
import CreateRoom from "../../Components/CreateRoom/CreateRoom";
import ProgressBar from "../../Components/ProgressBar";
type Props = {};

const SetRoom = (props: Props) => {
	const [seconds, setSeconds] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		const countdown = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 1) {
				clearInterval(countdown);
			}
		}, 1000);
		return () => clearInterval(countdown);
	}, [seconds]);
	return (
		<Container>
			<AnimatePresence>
				{seconds > 0 ? (
					<>
						{/* 환영합니다 */}
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
							<MainText>방 배치를 시작할게요!</MainText>
							<SubText>
								방이 여러개가 있더라도 걱정하지 마세요.
								<br />
								이용하면서 추가할 수 있습니다.
							</SubText>
						</motion.div>
						{seconds > 0 && <TimeText>{seconds}</TimeText>}
					</>
				) : (
					<>
						<ProgressBar page={2} />
						<CreateRoom></CreateRoom>
					</>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default SetRoom;
