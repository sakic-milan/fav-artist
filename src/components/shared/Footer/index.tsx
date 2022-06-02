import styled from 'styled-components';
import BackgroundWrapper from '../BackgroundWrapper';
import { FAVORITE_ARTIST } from '../../../utils/constants';

const Content = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
`;

const Background = styled.div`
	background-color: lightblue;
	width: 100%;
	overflow: hidden;
	height: 40px;
	position: relative;
`;

const Footer = () => (
	<Background>
		<BackgroundWrapper>
			<Content>{FAVORITE_ARTIST} fans app</Content>
		</BackgroundWrapper>
	</Background>
);

export default Footer;
