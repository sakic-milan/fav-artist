import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Track } from '../../models/models';
import SingleTrack from '../../components/Track';
import { get } from '../../utils/api';
import { FAVORITE_ARTIST } from '../../utils/constants';
import BackgroundWrapper from '../../components/shared/BackgroundWrapper';

const SearchTracks = () => {
	const [search, setSearch] = useState('');
	const [tracks, setTracks] = useState<Track[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const url = `method=track.search&artist=${FAVORITE_ARTIST}&track=${search}&format=json`;

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

	const LogoHeading = styled.h1`
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 30px;
	`;

	return !isLoading ? (
		<BackgroundWrapper>
			<LogoHeading>Explore {FAVORITE_ARTIST} tracks:</LogoHeading>
			<input type="text" name="search" value={search} onChange={handleChange} />
			<button type="button" onClick={handleSearch}>
				Search
			</button>
			{tracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</BackgroundWrapper>
	) : (
		<BackgroundWrapper>Loading...</BackgroundWrapper>
	);
};

export default SearchTracks;
