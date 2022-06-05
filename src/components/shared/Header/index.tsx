import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import {
	StyledHeader,
	Logo,
	Navigation,
	NavigationItem,
} from '../../styles/Header.styled';
import { useAppSelector } from '../../../store';
import { selectFavArtist } from '../../../store/reducers';

import { Flex } from '../../styles/Flex.styled';

const Header = () => {
	const favArtist = useAppSelector(selectFavArtist);

	return (
		<StyledHeader>
			<Container>
				<Flex>
					<Logo to="/">{favArtist} fans app</Logo>
					<Navigation>
						<NavigationItem to="/">Home</NavigationItem>
						<NavigationItem to="/search">Search</NavigationItem>
						<NavigationItem to="/liked">Like</NavigationItem>
						<NavigationItem to="/settings">Settings</NavigationItem>
					</Navigation>
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
