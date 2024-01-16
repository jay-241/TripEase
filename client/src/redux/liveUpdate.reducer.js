//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

import { createSlice } from '@reduxjs/toolkit';

const liveUpdateSlice = createSlice({
	name: 'liveUpdateReducer',
	initialState: {
		liveUpdatesData: [],
	},
	reducers: {
		// create redux state and save data coming from database
		createLiveUpdate: (state, action) => {
			state.liveUpdatesData = action.payload;
		},
	},
});

export const { createLiveUpdate } = liveUpdateSlice.actions;

export default liveUpdateSlice.reducer;
