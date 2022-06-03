import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
	height: 40px;
`;

export const NavigationItem = styled(Link)`
	text-decoration: none;
	align-items: center;
	margin: 0 20px;
	font-weight: 500;
	cursor: pointer;
`;
