import { Montserrat } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import './globals.scss';
import { Providers } from '@/app/GlobalProviders/Providers';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--main-font',

	weight: ['100', '200', '300', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'MiMiSmart',
	description: 'Умный дом под ключ',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='ru'>
			<body
				className={`${montserrat.className} ${montserrat.variable}} bg-[#EFEFEF]`}
			>
				<Providers>
					<Header />
					<main className='container '>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
