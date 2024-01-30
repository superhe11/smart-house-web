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

import DialogCard from './DialogMessage/DialogCard';

const cardVariants = {
	offscreen: {
		y: 50,
		opacity: 0,
	},
	onscreen: (custom) => ({
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut',

			stiffness: 75,
			duration: 1,
			delay: custom * 0.5,
		},
	}),
};

const dialogText = [
	{
		textFirst: 'Доброе утро!',
		textSecond: 'Как ваши дела?',
		right: '14rem',
		top: '7rem',
	},
	{
		textFirst: 'Включить вашу',
		textSecond: 'любимую музыку?',
		right: '15rem',
		top: '10.5rem',
	},
	{
		textFirst: 'Включаю утренний ',
		textSecond: 'плейлист',
		right: '16rem',
		top: '14rem',
	},
];

const MediaCard = () => {
	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.8 }}
			className='mt-10 flex flex-col lg:mx-20'
		>
			<Box className={styles.card} zIndex='-30'>
				<Box className={styles.card_list} mb='25px'>
					<Heading className={styles.card_h4} as='h4'>
						Мультимедиа
					</Heading>
					<UnorderedList spacing={1}>
						<ListItem>Домашний кинотеатр</ListItem>
						<ListItem>Музыка в каждой комнате</ListItem>
						<ListItem>AirPlay</ListItem>
						<ListItem>Следящая музыка</ListItem>
						<ListItem>
							Голосовые сообщения <br /> по помещениям
						</ListItem>
					</UnorderedList>

					{dialogText.map((item, idx) => (
						<DialogCard
							key={idx}
							right={item.right}
							top={item.top}
							textFirst={item.textFirst}
							textSecond={item.textSecond}
							variants={cardVariants}
							custom={idx}
						/>
					))}
				</Box>
				<Box className='absolute -right-6 top-36 -z-10 w-[225px] md:-right-32 md:top-20 md:w-[400px]'>
					<Image
						src='/home/Media.png'
						width={570}
						height={350}
						alt='Media'
					/>
				</Box>
			</Box>
		</motion.div>
	);
};

export default MediaCard;
