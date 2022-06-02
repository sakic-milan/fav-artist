import styled from 'styled-components';
import { useAppSelector } from '../../store';
import { selectLikedTracks } from '../../store/reducers';
import SingleTrack from '../../components/Track';
import { FAVORITE_ARTIST } from '../../utils/constants';
import BackgroundWrapper from '../../components/shared/BackgroundWrapper';

const LogoHeading = styled.h1`
	font-size: 28px;
	font-weight: 600;
`;

const BlockWrapper = styled(BackgroundWrapper)`
	display: block;
`;

const Liked = () => {
	const likedTracks = useAppSelector(selectLikedTracks);

	return (
		<BlockWrapper>
			<LogoHeading>Your favourite {FAVORITE_ARTIST} tracks:</LogoHeading>
			{likedTracks.map(track => (
				<SingleTrack key={track.name} track={track} />
			))}
		</BlockWrapper>
	);
};

export default Liked;
