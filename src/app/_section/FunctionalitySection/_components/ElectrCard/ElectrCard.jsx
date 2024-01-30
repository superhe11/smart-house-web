'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
	Box,
	Flex,
	Heading,
	List,
	ListItem,
	UnorderedList,
} from '@/components/chakraUI/proxy/proxyChakra';

import styles from '../../functionality.module.scss';

const ElectrCard = () => {
	return (
		<Flex as='div' flexDirection={'column'} mt='40px' className='lg:mx-20'>
			<Box className={styles.card}>
				<Box className={styles.card_list}>
					<Heading className={styles.card_h4} as='h4'>
						Электрика
					</Heading>
					<UnorderedList spacing={1}>
						<ListItem>Управление резетками</ListItem>
						<ListItem>Сценарные выключатели</ListItem>
						<ListItem>Бесперебойное питание</ListItem>
						<ListItem>Стабилизация изображения</ListItem>
						<ListItem>Молниезащита</ListItem>
					</UnorderedList>
				</Box>
				<Box as='div' className={styles.card_main_image}>
					<Image
						src='/SVG/Line-card.svg'
						alt='line'
						width={539}
						height={462}
					/>
				</Box>
				<motion.div
					animate={{
						y: ['-3%', '1%', '3%', '1%', '-3%'],
						rotate: [5, 3, 1, 3, 5],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 7,
					}}
					className='absolute right-32 top-6 h-[35px] w-[35px] md:right-96 md:top-12 md:h-[75px] md:w-[75px]'
				>
					<Image
						src='/SVG/card-1.svg'
						alt='line'
						width={150}
						height={150}
					/>
				</motion.div>
				<motion.div
					animate={{
						y: ['-5%', '1%', '3%', '1%', '-5%'],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 6,
					}}
					className='absolute right-2 top-2 w-[50px] md:right-14 md:top-10 md:w-[80px]'
				>
					<Image
						src='/SVG/card-1-2.svg'
						alt='line'
						width={150}
						height={150}
					/>
				</motion.div>
				<motion.div
					animate={{
						y: ['2%', '1%', '-1%', '1%', '2%'],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 9,
					}}
					className='absolute right-2 top-[4.25rem] w-[50px] md:top-40 md:w-[70px] lg:right-6'
				>
					<Image
						src='/SVG/card-1-3.svg'
						alt='line'
						width={150}
						height={150}
					/>
				</motion.div>
				<motion.div
					animate={{
						y: ['2%', '1%', '-1%', '1%', '2%'],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 7,
					}}
					className='absolute right-20 top-2 w-[35px] md:right-52 md:top-6 md:w-[65px]'
				>
					<Image
						src='/SVG/card-1-4.svg'
						alt='line'
						width={150}
						height={150}
					/>
				</motion.div>
				<motion.div
					animate={{
						y: ['5%', '1%', '-5%', '1%', '5%'],
						rotate: [5, 3, 1, 3, 5],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 7,
					}}
					className='absolute right-14 top-10 w-[100px] md:right-60 md:top-24 md:h-[155px] md:w-[155px] lg:top-24'
				>
					<Image
						src='/SVG/card-1-5.svg'
						alt='line'
						width={200}
						height={200}
					/>
				</motion.div>
			</Box>
		</Flex>
	);
};

export default ElectrCard;
