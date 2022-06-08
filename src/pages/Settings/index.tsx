import { ChangeEvent, useEffect, useState } from 'react';

import placeholderImg from '../../assets/images/placeholder.png';
import {
	ArtistCard,
	CardImage,
	SearchGrid,
} from '../../components/styles/Settings.styled';
import {
	Button,
	Input,
	Loader,
	PageHeading,
} from '../../components/styles/Shared.styled';
import useDebounce from '../../hooks/useDebounce';
import { Artist } from '../../models/models';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectTheme, setFavArtist, switchTheme } from '../../store/reducers';
import { get } from '../../utils/api';

const Settings = () => {
	const [searchResults, setSearchResults] = useState<Artist[]>([]);
	const [query, setQuery] = useState<string>('');
	const debouncedValue = useDebounce<string>(query, 250);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const url = `method=artist.search&artist=${query}&format=json`;

	const theme = useAppSelector(selectTheme);

	const handleChangeFavArtist = (artist: Artist) => {
		dispatch(setFavArtist(artist));
	};

	const handleChangeTheme = () => {
		dispatch(switchTheme());
	};

	const getArtists = async () => {
		setIsLoading(true);
		get(url)
			.then(res => {
				console.log(res.results.artistmatches.artist);
				setSearchResults(res.results.artistmatches.artist);
			})
			.catch(e => {
				console.log("Couldn't get artists");
			})
			.finally(() => setIsLoading(false));
	};

	const handleSearch = () => {
		getArtists();
	};

	useEffect(() => {
		getArtists();
	}, [debouncedValue]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<>
			<PageHeading>Choose app theme</PageHeading>
			<Button type="button" onClick={handleChangeTheme}>
				{`Switch to ${theme === 'purple' ? 'Green' : 'Purple'} theme`}
			</Button>
			<PageHeading>Choose favorite artist</PageHeading>
			<Input value={query} onChange={handleInputChange} />
			<Button type="button" onClick={handleSearch}>
				Search
			</Button>

			<SearchGrid>
				{isLoading ? (
					<Loader />
				) : (
					searchResults.map(artist => (
						<ResultCard
							key={artist.name}
							artist={artist}
							setFavArtist={handleChangeFavArtist}
						/>
					))
				)}
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
		<ArtistCard to="/" onClick={() => setFavArtist(artist)}>
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
