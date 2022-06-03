import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/styles/Button.styled';
import { get } from '../../utils/api';
import { Album } from '../../models/models';
import { sortAlbumsByName } from '../../utils/sort';
import { FAVORITE_ARTIST } from '../../utils/constants';
import AlbumItem from '../../components/Album/AlbumItem';
import BackgroundWrapper from '../../components/shared/BackgroundWrapper';
import GridItem from '../../components/shared/GridItem';

const url = `method=artist.gettopalbums&artist=${FAVORITE_ARTIST}&format=json`;

const Home = () => {
	const [albums, setAlbums] = useState<Album[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [sortByName, setSortByName] = useState(false);

	const toggleSort = () => {
		setSortByName(!sortByName);
	};

	const getAlbums = async () => {
		setIsLoading(true);
		get(url)
			.then(res => setAlbums(res.topalbums.album))
			.catch(() => alert("Couldn't get albums for selected artist"))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		getAlbums();
	}, []);

	const sortedAlbums =
		sortByName && albums ? sortAlbumsByName([...albums]) : albums;

	const Heading = styled.div`
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin: 18px 0;
	`;

	const buttonText = `Sort by ${sortByName ? 'popularity' : 'name'}`;

	return (
		<BackgroundWrapper>
			<Heading>
				<Button onClick={toggleSort} type="button">
					{buttonText}
				</Button>
			</Heading>
			<GridItem>
				{sortedAlbums?.map(album => (
					<AlbumItem key={album.name} album={album} />
				))}
			</GridItem>
		</BackgroundWrapper>
	);
};

export default Home;
