'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Logo } from '@/components/UI/Logo/Logo';
import {
	CloseIcon,
	Flex,
	HamburgerIcon,
	PhoneIcon,
} from '@/components/chakraUI/proxy/proxyChakra';

import { NavLink } from '../NavLink';
import styles from '../header.module.scss';

export const Burger = ({ navData }) => {
	const [isOpen, setIsOpen] = useState(false);

	const burgerVariant = {
		hidden: {
			transform: 'translateY(-100%)',
			opacity: 0,
			transition: {
				type: 'spring',
				duration: 0.4,
				delay: 0.6,
				stiffness: 47,
			},
		},
		visible: {
			transform: 'translateY(0%)',
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 0.3,
				delay: 0.2,
				stiffness: 47,
			},
		},
		exit: {
			transform: 'translateY(-100%)',
			opacity: 0,
			// transition: {
			// 	delay: 0.2,
			// 	duration: 1,
			// },
		},
	};

	const listVariant = {
		hidden: (custom) => ({
			transform: 'translateX(-27%)',
			opacity: 0,
			transition: {
				type: 'spring',
				stiffness: 47,
				duration: 0.2,
				delay: custom * 0.1,
			},
		}),
		visible: (custom) => ({
			transform: 'translateX(0%)',
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 47,
				duration: 0.2,
				delay: custom * 0.1,
			},
		}),
		exit: (custom) => ({
			transform: 'translateX(10%)',

			opacity: 0,
			transition: {
				type: 'spring',
				stiffness: 47,
				duration: 0.4,
				delay: (navData.length - custom - 1) * 0.13, //Переворачиваем порядок исчезновения элементов
			},
		}),
	};

	return (
		<>
			<button
				className='lg:invisible'
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<HamburgerIcon boxSize={'25px'} />
			</button>

			<motion.div
				initial={{ transform: 'translateY(-100%)', opacity: 0 }}
				variants={burgerVariant}
				animate={isOpen ? 'visible' : 'hidden'}
				className={styles.burger}
				// exit={{ transform: 'translateY(-100%)', opacity: 0 }}
			>
				<div className={styles.burger_header}>
					<Logo />
					<button onClick={() => setIsOpen((prev) => !prev)}>
						<CloseIcon boxSize={'18px'} />
					</button>
				</div>
				<ul className={styles.burger_list}>
					<AnimatePresence>
						{isOpen &&
							navData.map((item) => (
								<motion.li
									className='z-[100]'
									custom={item.id}
									initial='hidden'
									key={item.id}
									variants={listVariant}
									reverse={isOpen ? 'false' : 'true'}
									animate={isOpen ? 'visible' : 'hidden'}
									exit='exit'
									onClick={() => setIsOpen((prev) => !prev)}
								>
									<NavLink item={item} />
								</motion.li>
							))}
					</AnimatePresence>
				</ul>
				<Flex gap='8px' mt='18px' alignItems='center'>
					<PhoneIcon as='svg' />
					<p className='block'>+7 495 189-69-67</p>
				</Flex>
			</motion.div>
		</>
	);
};
