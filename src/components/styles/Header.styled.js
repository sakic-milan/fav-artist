import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: sticky;
	z-index: 99999;
	top: 0;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.white};
	padding: 12px 0; ;
`;

export const Logo = styled(Link)`
	font-size: 24px;
	font-weight: 500;
	text-decoration: none;
`;

export const Navigation = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 42px;
`;

export const NavigationItem = styled(Link)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	align-items: center;
	margin-left: 28px;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
`;
