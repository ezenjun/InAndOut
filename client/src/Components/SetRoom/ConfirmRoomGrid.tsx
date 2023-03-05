import styled from "styled-components";
import { CardMainText, CardSubText } from "../Text";
import { TextWrap } from "./CreateRoom";

type Grid = boolean[][];
type Props = {
	roomGrid: Grid;
};

const ConfirmRoomGrid = ({ roomGrid }: Props) => {
	return (
		<Container>
			<TextWrap>
				<CardMainText>최종 좌석 배치표입니다.</CardMainText>
				<CardSubText>저장하시겠습니까?</CardSubText>
			</TextWrap>
			<GridWrap>
				{roomGrid.map((row, rowIndex) => (
					<Row key={rowIndex}>
						<p>{rowIndex + 1}</p>
						{row.map((cell, colIndex) => (
							<Seat key={colIndex} seatValid={cell} />
						))}
					</Row>
				))}
			</GridWrap>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	margin-bottom: 20px;
	::-webkit-scrollbar {
		position: absolute;
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		height: 30%;
		background-color: #705ad4;
		border-radius: 10px;
		/* background-clip: padding-box; */
		border: 2px solid transparent;
		border-radius: 20px;
	}
	::-webkit-scrollbar-track {
		background-color: #d0d0d0;
		border-radius: 10px;
		box-shadow: inset 0px 0px 5px white;
		border-radius: 20px;
		margin-top: 100px;
	}
`;
const GridWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 30px 20px 20px 20px;
	box-sizing: border-box;
`;

const Seat = styled.div<{ seatValid: Boolean }>`
	background-color: white;
	border: ${(props) =>
		props.seatValid ? "1px solid black" : "1px solid white"};
	width: 60px;
	height: 40px;
	border-radius: 8px;
	/* border: 1px solid black; */
	margin: 6px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export default ConfirmRoomGrid;
