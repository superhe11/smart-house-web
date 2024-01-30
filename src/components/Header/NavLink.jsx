'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const NavLink = ({ item }) => {
	const [isHover, setIsHover] = useState(false);

	const listVariants = {
		hidden: {
			transform: 'translateX(-25%)',
			opacity: 0,
		},
		visible: {
			transform: 'translateX(0%)',
			opacity: 1,
		},
		exit: {
			transform: 'translateX(10%)',
			opacity: 0,
		},
	};

	return (
		<>
			<Link
				onMouseEnter={() => setIsHover((prev) => !prev)}
				onMouseLeave={() => setIsHover((prev) => !prev)}
				className=''
				href={`/${item.link}`}
			>
				{item.label}
			</Link>
			<div className='h-[20px] w-[18px] p-[2px] xl:h-[22px]  xl:w-[20px]'>
				<AnimatePresence>
					{isHover && (
						<motion.div
							className='h-full w-full'
							variants={listVariants}
							initial='hidden'
							animate={isHover ? 'visible' : 'hidden'}
							exit='exit'
							transition={{
								duration: 0.3,
								delay: 0.1,
								ease: 'easeInOut',
							}}
						>
							<Image
								className='h-full w-full'
								src={'./SVG/arrow-blue.svg'}
								width={30}
								height={30}
								alt='arrow'
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};
