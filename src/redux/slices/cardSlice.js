import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

const initialState = {
	data: [],
	status: 'idle',
	error: null,
};

const fetchData = createAsyncThunk('card/fetchData', async () => {
	const res = await fetch('http://localhost:3000/api/info');

	if (!res.ok) throw new Error('Error fetching all cards');

	return res.json();
});

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchData.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchData.fulfilled]: (state, action) => {
			state.status = 'fulfilled';
			state.data = action.payload;
		},
		[fetchData.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.error.message;
		},
	},
});

// export const {} = dataSlice.actions;
export const card = cardSlice.reducer;

export const getCardsSWR = () => {
	const dispatch = useDispatch();
	const { data, error, mutate, isLoading } = useSWR(
		'card',
		() => dispatch(fetchData()),
		{ revalidateOnFocus: false }
	);
	return { data, error, mutate, isLoading };
};
