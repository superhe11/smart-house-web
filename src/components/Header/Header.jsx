'use client';

import React from 'react';

import {
	Box,
	Center,
	PhoneIcon,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
} from '@/components/chakraUI/proxy/proxyChakra';

import { Logo } from '@/UI/Logo/Logo';

import useMediaQuery from '@/hooks/useMediaQuery';

import { Burger } from './BurgerMenu/Burger';
import { navData } from './Data';
import { Nav } from './Nav/Nav';
import styles from './header.module.scss';

const Header = () => {
	const isAboveSmallQuery = useMediaQuery('(min-width: 1024px)');
	const isAboveMediumQuery = useMediaQuery('(min-width: 1280px)');

	return (
		<Center
			as='header'
			zIndex={'1000'}
			position={'fixed'}
			width='full'
			top={'0'}
			left={'0'}
		>
			<Box
				as='nav'
				className={`container relative mx-auto ${styles.header}`}
			>
				{/* logo */}
				<div>
					<Logo />
				</div>
				{isAboveSmallQuery ? (
					<>
						{/* navigation */}
						<Nav navData={navData} />
						{/* Phone */}
						<div className={styles.header_phone}>
							{isAboveMediumQuery ? (
								<>
									<PhoneIcon as='svg' />
									<p className='hidden xl:block'>+7 495 189-69-67</p>
								</>
							) : (
								<>
									<Popover>
										<PopoverTrigger>
											<button>
												<PhoneIcon as='svg' />
											</button>
										</PopoverTrigger>
										<PopoverContent width={'auto'}>
											<PopoverBody>
												<p className=''>+7 495 189-69-67</p>
											</PopoverBody>
										</PopoverContent>
									</Popover>
								</>
							)}
						</div>
					</>
				) : (
					<>
						<Burger navData={navData} />
					</>
				)}
			</Box>
		</Center>
	);
};

export default Header;
