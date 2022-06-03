import { Link } from 'react-router-dom';
import { FC } from 'react';
import styled from 'styled-components';
import { Album } from '../../models/models';
import placeholderImg from '../../assets/images/placeholder.png';

type AlbumItemProps = {
	album: Album;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 100%;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	overflow: hidden;
`;

const Title = styled.h3`
	margin-top: 10px 0;
`;

const Views = styled.p`
	margin: 10px 0;
	font-size: 15px;
`;

const StyledLink = styled(Link)`
	margin-bottom: 10px;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.header};
	font-size: 15px;
	cursor: pointer;
`;

const Content = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
`;

const AlbumItem: FC<AlbumItemProps> = ({ album }) => (
	<Container>
		<img
			src={
				album?.image[2]['#text'] === ''
					? placeholderImg
					: album?.image[2]['#text']
			}
			alt=""
		/>
		<Content>
			<Title>{album?.name}</Title>
			<Views>Views: {album?.playcount}</Views>
			<StyledLink to={`album/${album?.name}`}>details</StyledLink>
		</Content>
	</Container>
);

export default AlbumItem;
