import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			firtsText: 'Датчик движения',
			secondText: 'уловил движение',
			subtitle: 'с 10:00 до 20:00',
		},
		{
			firtsText: 'Свет в прихожей',
			secondText: 'Включить',
			subtitle: 'яркость 50%',
		},
		{
			firtsText: 'Музыка',
			secondText: 'Включить',
			subtitle: 'громкость 15%',
		},

		{
			firtsText: 'движение меньше 5%',
			secondText: '30 сек',
			subtitle: 'в течение 3 минут',
		},
		{
			firtsText: 'Свет в прихожей',
			secondText: 'Выключить',
		},
		{
			firtsText: 'Музыка',
			secondText: 'музыка',
		},
	],
};

export const ifMoveSlice = createSlice({
	name: 'IfMove',
	initialState,
	reducers: {},
	extraReducers: {},
});

// export const {} = dataSlice.actions;
export const ifMove = ifMoveSlice.reducer;
