/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';

import { selectFavArtist, setFavArtist } from '../../store/reducers';
import { get } from '../../utils/api';

import SingleTrack from '../../components/Track';
import BackgroundWrapper from '../../components/shared/BackgroundWrapper';

const DEBOUNCE = 1000;

const Liked = () => {
	const dispatch = useAppDispatch();
	const [artists, setArtists] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [selectedArtist, setSelectedArtist] = useState('');
	const [search, setSearch] = useState('');

	const url = `method=artist.search&artist=${search}&format=json`;

	const favArtist = useAppSelector(selectFavArtist);

	const handleChangeFavArtist = (artist: string) => {
		dispatch(setFavArtist(artist));
	};

	const getArtists = async () => {
		get(url)
			.then(res => {
				const artists = res.results.artistmatches.artist.map(
					(artist: { name: string }) => artist.name
				);
				setArtists(artists);
			})
			.catch(e => {
				alert("Couldn't get albums for selected artist");
			});
	};

	useEffect(() => {
		getArtists();
	}, []);

	const handleSearch = () => {
		getArtists();
	};

	return (
		<>
			<h1>{favArtist}</h1>

			<input
				placeholder="search"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<button type="button" onClick={handleSearch}>
				Search
			</button>

			{artists.map(artist => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events
				<p onClick={e => handleChangeFavArtist(artist)}>{artist}</p>
			))}
		</>
	);
};

export default Liked;
