import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
	// define the part you're going to style

	thumb: {
		bg: '#fff',
		shadow: 'md',
	},
	track: {
		bg: '#E8E8E8',
		_checked: {
			bg: 'main.Green',
		},
	},
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
