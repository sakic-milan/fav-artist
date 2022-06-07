import { ChangeEvent,useState } from 'react';
import styled from 'styled-components';

import {
	Button,
	Input,
	PageHeading,
} from '../../components/styles/Shared.styled';
import SingleTrack from '../../components/Track';
import { Track } from '../../models/models';
import { useAppSelector } from '../../store';
import { selectFavArtist } from '../../store/reducers';
import { get } from '../../utils/api';

const SearchTracks = () => {
	const [search, setSearch] = useState('');
	const [tracks, setTracks] = useState<Track[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const favArtist = useAppSelector(selectFavArtist);

	const url = `method=track.search&artist=${favArtist?.name}&track=${search}&format=json`;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSearch = () => {
		getTracks();
	};

	const getTracks = async () => {
		setIsLoading(true);
		get(url)
			.then(res => {
				setTracks(res.results.trackmatches.track);
			})
			.catch(e => {
				alert("Couldn't get albums for selected artist");
			})
			.finally(() => setIsLoading(false));
	};

	return !isLoading ? (
		<>
			<PageHeading>Explore {favArtist?.name} tracks:</PageHeading>
			{/* value={search} onChange={handleChange} */}
			<Input type="text" name="search" value={search} onChange={handleChange} />
			<Button type="button" onClick={handleSearch}>
				Search
			</Button>
			{tracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</>
	) : (
		<>Loading...</>
	);
};

export default SearchTracks;
