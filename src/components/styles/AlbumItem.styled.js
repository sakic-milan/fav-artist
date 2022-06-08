import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	background-color: white;
	width: 100%;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	overflow: hidden;

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;

export const Title = styled.h3`
	margin-top: 10px 0;
`;

export const Views = styled.p`
	margin: 10px 0;
	font-size: 15px;
`;

export const StyledLink = styled(Link)`
	margin-bottom: 10px;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.header};
	font-size: 15px;
	cursor: pointer;
`;

export const Content = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
`;
