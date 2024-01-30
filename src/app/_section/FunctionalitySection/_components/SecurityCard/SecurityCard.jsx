import Image from 'next/image';

import {
	Box,
	Flex,
	Heading,
	ListItem,
	UnorderedList,
} from '@/components/chakraUI/proxy/proxyChakra';

import styles from '../../functionality.module.scss';

const SecurityCard = () => {
	return (
		<Flex
			as='div'
			flexDirection={'column'}
			className='w-full md:w-3/5 lg:mr-20'
		>
			<Box className={styles.card_secondary}>
				<Heading as='h4' className={styles.main_title}>
					Безопастность
				</Heading>
				<UnorderedList mt='4' spacing={1}>
					<ListItem>Электрозамок</ListItem>
					<ListItem>Защита от протечек</ListItem>
					<ListItem>Охранная сигнализация</ListItem>
					<ListItem>Видеонаблюдение</ListItem>
					<ListItem>Домофония</ListItem>
				</UnorderedList>
				<Box className='absolute right-16 top-40 -z-10 w-[175px] md:w-[200px]'>
					<Image
						src='/home/security-1.png'
						width={200}
						height={200}
						alt='security'
					/>
				</Box>
				<Box className='absolute right-10 top-12 -z-10 w-[82px] md:w-[102px]'>
					<Image
						src='/home/security-camera.png'
						width={168}
						height={168}
						alt='camera'
					/>
				</Box>
			</Box>
		</Flex>
	);
};

export default SecurityCard;
