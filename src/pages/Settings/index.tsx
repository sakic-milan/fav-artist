import { useState } from 'react';
import { useAppDispatch } from '../../store';
import { setFavArtist } from '../../store/reducers';
import { get } from '../../utils/api';
import {
	PageHeading,
	Input,
	Button,
} from '../../components/styles/Shared.styled';
import {
	SearchGrid,
	ArtistCard,
	CardImage,
} from '../../components/styles/Settings.styled';
import { Artist } from '../../models/models';
import placeholderImg from '../../assets/images/placeholder.png';

const Settings = () => {
	const [searchResults, setSearchResults] = useState<Artist[]>([]);
	const [query, setQuery] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const url = `method=artist.search&artist=${query}&format=json`;

	const handleChangeFavArtist = (artist: Artist) => {
		dispatch(setFavArtist(artist));
	};

	const getArtists = async () => {
		setIsLoading(true);
		get(url)
			.then(res => {
				console.log(res.results.artistmatches.artist);
				setSearchResults(res.results.artistmatches.artist);
			})
			.catch(e => {
				alert("Couldn't get artists");
			})
			.finally(() => setIsLoading(false));
	};

	const handleSearch = () => {
		getArtists();
	};

	const asyncSearch = () => {
		if (query.length >= 2) {
			getArtists();
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		asyncSearch();
	};

	return (
		<>
			<PageHeading>Choose your favorite artist</PageHeading>
			<Input value={query} onChange={handleInputChange} />
			<Button type="button" onClick={handleSearch}>
				Search
			</Button>
			<SearchGrid>
				{searchResults.map(artist => (
					<ResultCard
						key={artist.mbid}
						artist={artist}
						setFavArtist={handleChangeFavArtist}
					/>
				))}
			</SearchGrid>
		</>
	);
};

export default Settings;

const ResultCard = (props: {
	artist: Artist;
	setFavArtist: (artist: Artist) => void;
}) => {
	const { artist, setFavArtist } = props;
	return (
		<ArtistCard onClick={() => setFavArtist(artist)}>
			<p>{artist.name}</p>
			<span>{`Listeners: ${artist.listeners}`}</span>
			<CardImage
				src={
					artist?.image[2]['#text'] === ''
						? placeholderImg
						: artist?.image[2]['#text']
				}
			/>
		</ArtistCard>
	);
};
