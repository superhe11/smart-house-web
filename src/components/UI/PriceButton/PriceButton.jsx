import Image from 'next/image';
import Link from 'next/link';

import styles from './priceButton.module.scss';

export const PriceButton = ({ children }) => {
	return (
		<Link href='/price' className={styles.price_button}>
			<Image
				src='/SVG/button-arrow-svg.svg'
				alt='button'
				width={59}
				height={59}
			/>
			<p className='text-left text-base font-semibold text-white'>
				{children}
			</p>
		</Link>
	);
};
