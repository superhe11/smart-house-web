import { configureStore } from '@reduxjs/toolkit';

import { ifMove } from './slices/IfMoveSlice';
import { card } from './slices/cardSlice';

export const store = configureStore({
	reducer: {
		card: card,
		ifMove: ifMove,
	},
});
