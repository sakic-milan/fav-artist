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

import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { Home } from '@styled-icons/boxicons-regular/Home';

import { Flex } from '../../styles/Flex.styled';

const Header = () => {
	const favArtist = useAppSelector(selectFavArtist);

	return (
		<StyledHeader>
			<Container>
				<Flex>
					<Logo to="/">{favArtist?.name} fans app</Logo>
					<Navigation>
						<NavigationItem to="/">
							<Home size="28" />
							Home
						</NavigationItem>
						<NavigationItem to="/search">
							<Search size="28" />
							Search
						</NavigationItem>
						<NavigationItem to="/liked">
							<FavoriteBorder size="28" />
							Likes
						</NavigationItem>
						<NavigationItem to="/settings">
							<SettingsOutline size="28" /> Settings
						</NavigationItem>
					</Navigation>
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
