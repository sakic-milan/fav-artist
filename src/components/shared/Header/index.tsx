import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import {
	StyledHeader,
	Logo,
	Navigation,
	NavigationItem,
} from '../../styles/Header.styled';
import { FAVORITE_ARTIST } from '../../../utils/constants';
import { Flex } from '../../styles/Flex.styled';

const Header = () => (
	<StyledHeader>
		<Container>
			<Flex>
				<Logo to={`/`}>{FAVORITE_ARTIST} fans app</Logo>
				<Navigation>
					<NavigationItem to="/">Home</NavigationItem>
					<NavigationItem to="/search">Search</NavigationItem>
					<NavigationItem to="/liked">Like</NavigationItem>
				</Navigation>
			</Flex>
		</Container>
	</StyledHeader>
);

export default Header;
