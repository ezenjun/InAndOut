import styled from "styled-components";

export const Line = styled.div<{ dash?: boolean }>`
	border-top: 2px solid #bbbbbb;
	width: 100%;
	margin-bottom: 20px;
	${(props) => props.dash && "border-top: dashed 2px #bbbbbb"}
`;
