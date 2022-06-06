import styled from 'styled-components';
import { useAppSelector } from '../../store';
import { PageHeading } from '../../components/styles/Shared.styled';
import { selectLikedTracks, selectFavArtist } from '../../store/reducers';
import SingleTrack from '../../components/Track';

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
