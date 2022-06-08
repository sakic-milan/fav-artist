import { FC } from 'react';

import placeholderImg from '../../assets/images/placeholder.png';
import { Album } from '../../models/models';
import {
	Container,
	Content,
	StyledLink,
	Title,
	Views,
} from '../styles/AlbumItem.styled';

type AlbumItemProps = {
	album: Album;
};

const AlbumItem: FC<AlbumItemProps> = ({ album }) => (
	<Container to={`album/${album?.name}`}>
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
		</Content>
	</Container>
);

export default AlbumItem;
