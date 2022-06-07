import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Artist, Theme,Track } from '../../models/models';
import type { RootState } from '../index';

interface PreferencesState {
	likedTracks: Track[];
	favArtist: Artist | null;
	theme: Theme;
}

const initialState: PreferencesState = {
	likedTracks: [],
	favArtist: null,
	theme: Theme.Purple,
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
		setFavArtist: (state, action: PayloadAction<Artist>) => {
			state.favArtist = action.payload;
		},
		switchTheme: state => {
			if (state.theme === Theme.Green) {
				state.theme = Theme.Purple;
			} else {
				state.theme = Theme.Green;
			}
		},
	},
});

export const { likeTrack, dislikeTrack, setFavArtist, switchTheme } =
	preferencesSlice.actions;

export const selectLikedTracks = (state: RootState) =>
	state.preferences.likedTracks;

export const selectFavArtist = (state: RootState) =>
	state.preferences.favArtist;

export const selectIfTrackIsLiked = (state: RootState, track: Track) =>
	!!state.preferences.likedTracks.find(t => t.name === track.name);

export const selectTheme = (state: RootState) => state.preferences.theme;

export const preferencesReducer = preferencesSlice.reducer;
