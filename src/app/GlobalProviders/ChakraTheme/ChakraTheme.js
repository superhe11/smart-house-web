// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

const colors = {
	main: {
		Gray: {
			900: '#444444',
		},
		Orange: '#FC891C',
		White: '#F6FCFF',
		Green: '#34C759',
	},
	text: {
		main: '#2A2A2A',
		second: '#A4A4A4',
	},
};

const containerSize = {
	containerSize: {
		1440: '1440px',
	},
};

export const theme = extendTheme({ colors, containerSize });
