'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { switchTheme } from '@/components/UI/Checker/CheckerTheme';

import { store } from '@/redux/store';

const colors = {
	main: {
		Gray: {
			900: '#444444',
			800: '#5c5c5c',
		},
		Orange: '#FC891C',
		White: {
			900: '#F6FCFF',
			800: '#e8e8e8',
		},
		Green: '#34C759',
	},
	text: {
		main: '#2A2A2A',
		second: '#A4A4A4',
	},
};

const sizes = {
	containerSize: {
		'2xl': '1440px',
	},
};

export const theme = extendTheme({
	colors,
	sizes,
	fonts: {
		heading: 'var(--main-font)',
		body: 'var(--main-font)',
	},
	components: { Switch: switchTheme },
});

export const Providers = ({ children }) => {
	return (
		<Provider store={store}>
			<CacheProvider>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</CacheProvider>
		</Provider>
	);
};

// export default Providers;
