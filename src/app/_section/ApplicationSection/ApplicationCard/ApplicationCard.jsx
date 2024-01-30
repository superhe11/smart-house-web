import Image from 'next/image';

import { Box, Heading, Text } from '@/components/chakraUI/proxy/proxyChakra';

import styles from './applicationcard.module.scss';

const ApplicationCard = ({ card }) => {
	return (
		<Box className={styles.app_card}>
			<Box className='relative z-50'>
				<Heading as='h4' className={styles.app_card_heading}>
					{card.heading}
				</Heading>
				<Text className={styles.app_card_body}>{card.body}</Text>
			</Box>
			<Box className={styles.app_card_bg_img}>
				<Image
					src={`/home/${card.imgName}.png`}
					alt={card.imgName}
					width={1000}
					height={600}
					className='h-full w-full bg-cover object-cover'
				/>
			</Box>
			<Box className={styles.app_card_phone}>
				<Image
					src={`/home/${card.phoneImg}.png`}
					width={200}
					height={320}
				/>
			</Box>
		</Box>
	);
};

export default ApplicationCard;
