import styled from 'styled-components';
import { useAppSelector } from '../../store';
import { selectLikedTracks, selectFavArtist } from '../../store/reducers';
import SingleTrack from '../../components/Track';
import BackgroundWrapper from '../../components/shared/BackgroundWrapper';

const LogoHeading = styled.h1`
	font-size: 28px;
	font-weight: 600;
	margin: 22px 0;
`;

const BlockWrapper = styled(BackgroundWrapper)`
	display: block;
`;

const Liked = () => {
	const likedTracks = useAppSelector(selectLikedTracks);
	const favArtist = useAppSelector(selectFavArtist);

	return (
		<BlockWrapper>
			<LogoHeading>Your favourite {favArtist} tracks:</LogoHeading>
			{likedTracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</BlockWrapper>
	);
};

export default Liked;
