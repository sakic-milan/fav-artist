import { FC } from 'react';
import styled from 'styled-components';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { Button } from '../styles/Shared.styled';
import { Container, TrackName, Liked } from '../styles/Track.styled';
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

	return (
		<Container>
			<TrackName>
				{track.name}{' '}
				<a href={track.url} rel="noopener">
					LastFM
				</a>
			</TrackName>

			{isTrackLiked ? (
				<Button onClick={handleDislikeTrack} type="button">
					<Liked size="26" />
				</Button>
			) : (
				<Button onClick={handleLikeTrack} type="button">
					<Heart size="22" />
				</Button>
			)}
		</Container>
	);
};

export default SingleTrack;
