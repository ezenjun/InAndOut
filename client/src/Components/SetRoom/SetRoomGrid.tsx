import styled from "styled-components";
import { CardMainText, CardSubText } from "../Text";
import { TextWrap } from "./CreateRoom";

interface Cell {
	value: boolean;
}
type Grid = Cell[][];
type Props = {
	roomGrid: Grid;
	setRoomGrid: React.Dispatch<React.SetStateAction<Grid>>;
};

const SetRoomGrid = ({ roomGrid, setRoomGrid }: Props) => {
	// const updateCell = (row: number, col: number, value: boolean) => {
	// 	setRoomGrid((roomGrid) => {
	// 		const newGrid = [...roomGrid];
	// 		newGrid[row][col] = { value };
	// 		return newGrid;
	// 	});
	// };
	return (
		<Container>
			<TextWrap>
				<CardMainText>좌석을 제외한 복도만 선택해주세요.</CardMainText>
				<CardSubText>좌석을 클릭해 복도를 만들어주세요.</CardSubText>
			</TextWrap>
			<GridWrap>
				{roomGrid.map((row, rowIndex) => (
					<Row key={rowIndex}>
						<p>{rowIndex + 1}</p>
						{row.map((cell, colIndex) => (
							<Seat key={colIndex} />
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
	/* overflow: auto;
	::-webkit-scrollbar {
		position: absolute;
		width: 8px;
	}
	::-webkit-scrollbar-thumb {
		height: 30%;
		background-color: #705ad4;
		border-radius: 10px;
		background-clip: padding-box;
		border: 2px solid transparent;
		border-radius: 20px;
	}
	::-webkit-scrollbar-track {
		background-color: #d0d0d0;
		border-radius: 10px;
		box-shadow: inset 0px 0px 5px white;
		border-radius: 20px;
		margin: 100px;
	} */
`;

const Seat = styled.div`
	width: 60px;
	height: 40px;
	border-radius: 8px;
	border: 1px solid black;
	margin: 6px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export default SetRoomGrid;
