import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundWrapper from '../BackgroundWrapper';

const Container = styled.div`
	width: 100%;
	height: 40px;
	background-color: lightblue;
`;

const Navigation = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
`;

const NavigationItem = styled(Link)`
	text-decoration: none;
	align-items: center;
	margin: 0 20px;
	font-weight: 500;
	cursor: pointer;
`;

const Header = () => (
	<Container>
		<BackgroundWrapper>
			<Navigation>
				<NavigationItem to="/">Home</NavigationItem>
				<NavigationItem to="/search">Search</NavigationItem>
				<NavigationItem to="/liked">Liked</NavigationItem>
			</Navigation>
		</BackgroundWrapper>
	</Container>
);

export default Header;
