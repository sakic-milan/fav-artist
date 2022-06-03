import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button.styled';
import { Container, TrackName } from '../styles/Track.styled';
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

	console.log('track', track);

	return (
		<Container>
			<TrackName>
				{track.name}{' '}
				<a href={track.url} target="_blank">
					LastFM
				</a>
			</TrackName>

			{isTrackLiked ? (
				<Button onClick={handleDislikeTrack} type="button">
					Unlike
				</Button>
			) : (
				<Button onClick={handleLikeTrack} type="button">
					Like
				</Button>
			)}
		</Container>
	);
};

export default SingleTrack;
