import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Track } from '../../models/models';
import { get } from '../../utils/api';
import SingleTrack from '../../components/Track';
import { FAVORITE_ARTIST } from '../../utils/constants';
import { BackgroundWrapper } from '../../components/shared/BackgroundWrapper';

const SingleAlbumView = () => {
	let { name } = useParams();
	const [tracks, setTracks] = useState<Track[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getSingleAlbumData = async () => {
		get(
			`method=album.getinfo&artist=${FAVORITE_ARTIST}&album=${name}&format=json`
		)
			.then(res => {
				setTracks(res.album.tracks.track);
			})
			.catch(() => alert("Couldn't get albums for selected artist"))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		getSingleAlbumData();
	}, []);

	const LogoHeading = styled.h1`
		font-size: 28px;
		font-weight: 600;
		margin: 22px 0;
	`;

	return (
		<BackgroundWrapper>
			<LogoHeading>Album: {name}</LogoHeading>

			{tracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</BackgroundWrapper>
	);
};

export default SingleAlbumView;
