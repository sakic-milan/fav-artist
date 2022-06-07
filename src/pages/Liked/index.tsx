import styled from 'styled-components';

import { PageHeading } from '../../components/styles/Shared.styled';
import SingleTrack from '../../components/Track';
import { useAppSelector } from '../../store';
import { selectFavArtist,selectLikedTracks } from '../../store/reducers';

const Liked = () => {
	const likedTracks = useAppSelector(selectLikedTracks);
	const favArtist = useAppSelector(selectFavArtist);

	return (
		<>
			<PageHeading>Your favourite {favArtist?.name} tracks:</PageHeading>
			{likedTracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</>
	);
};

export default Liked;
