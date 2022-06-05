import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Track } from '../../models/models';
import { useAppSelector } from '../../store';
import { selectFavArtist } from '../../store/reducers';

import SingleTrack from '../../components/Track';
import { get } from '../../utils/api';
import { Button } from '../../components/styles/Button.styled';
import BackgroundWrapper from '../../components/shared/BackgroundWrapper';

const LogoHeading = styled.h1`
	font-size: 28px;
	font-weight: 600;
	margin: 22px 0;
`;

const Input = styled.input`
	font-size: 18px;
	padding: 10px;
	padding-left: 20px;
	border: 1px solid ${({ theme }) => theme.colors.header};
	border-radius: 60px;
	margin-right: 12px;

	::placeholder {
		color: palevioletred;
	}

	&:focus {
		outline: red;
	}
`;

const SearchTracks = () => {
	const [search, setSearch] = useState('');
	const [tracks, setTracks] = useState<Track[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const favArtist = useAppSelector(selectFavArtist);

	const url = `method=track.search&artist=${favArtist}&track=${search}&format=json`;

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
		<BackgroundWrapper>
			<LogoHeading>Explore {favArtist} tracks:</LogoHeading>
			{/* value={search} onChange={handleChange} */}
			<Input type="text" name="search" value={search} onChange={handleChange} />
			<Button type="button" onClick={handleSearch}>
				Search
			</Button>
			{tracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</BackgroundWrapper>
	) : (
		<BackgroundWrapper>Loading...</BackgroundWrapper>
	);
};

export default SearchTracks;
