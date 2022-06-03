import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { FAVORITE_ARTIST } from '../../../utils/constants';

const StyledFooter = styled.footer`
	margin-top: 24px;
	background-color: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.white};
	padding: 6px 0;
`;

const Footer = () => (
	<StyledFooter>
		<Container>{FAVORITE_ARTIST} fans app</Container>
	</StyledFooter>
);

export default Footer;
