import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../../models/models';
import type { RootState } from '../index';

interface PreferencesState {
	likedTracks: Track[];
}

const initialState: PreferencesState = {
	likedTracks: [],
};

export const preferencesSlice = createSlice({
	name: 'preferences',
	initialState,
	reducers: {
		likeTrack: (state, action: PayloadAction<Track>) => {
			if (
				state.likedTracks &&
				state.likedTracks.find(track => track.name === action.payload.name)
			)
				return;

			state.likedTracks = [...state.likedTracks, action.payload];
		},
		dislikeTrack: (state, action: PayloadAction<Track>) => {
			state.likedTracks = [
				...state.likedTracks.filter(
					track => track.name !== action.payload.name
				),
			];
		},
	},
});

export const { likeTrack, dislikeTrack } = preferencesSlice.actions;

export const selectLikedTracks = (state: RootState) =>
	state.preferences.likedTracks;

export const selectIfTrackIsLiked = (state: RootState, track: Track) =>
	!!state.preferences.likedTracks.find(t => t.name === track.name);

export const preferencesReducer = preferencesSlice.reducer;
