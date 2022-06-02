import { FC } from 'react';
import styled from 'styled-components';
import { Track } from '../../models/models';
import { useAppDispatch, useAppSelector } from '../../store';
import {
	dislikeTrack,
	likeTrack,
	selectIfTrackIsLiked,
} from '../../store/reducers';

type SingleTrackProps = {
	track: Track;
};

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightblue;
	border-radius: 4px;
	margin: 12px 2px;
	padding: 4px;
`;

const SingleTrack: FC<SingleTrackProps> = ({ track }) => {
	const dispatch = useAppDispatch();
	const isTrackLiked = useAppSelector(state =>
		selectIfTrackIsLiked(state, track)
	);

	const handleLikeTrack = () => {
		if (isTrackLiked) return;
		dispatch(likeTrack(track));
	};

	const handleDislikeTrack = () => {
		if (!isTrackLiked) return;
		dispatch(dislikeTrack(track));
	};

	return (
		<Container>
			<h3>{track.name}</h3>

			{isTrackLiked ? (
				<button type="button" onClick={handleDislikeTrack}>
					Remove from favorites
				</button>
			) : (
				<button type="button" onClick={handleLikeTrack}>
					Add to favorites
				</button>
			)}
		</Container>
	);
};

export default SingleTrack;
