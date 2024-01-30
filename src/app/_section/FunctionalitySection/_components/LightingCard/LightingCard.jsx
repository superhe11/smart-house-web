import Image from 'next/image';

import {
	Box,
	Flex,
	Heading,
	ListItem,
	UnorderedList,
} from '@/components/chakraUI/proxy/proxyChakra';

import styles from '../../functionality.module.scss';

const LightingCard = () => {
	return (
		<Flex
			as='div'
			flexDirection={'column'}
			className='w-full md:w-2/5 lg:ml-20'
		>
			<Box className={styles.card_secondary}>
				<Heading as='h4' className={styles.main_title}>
					Освещение
				</Heading>
				<UnorderedList mt='4' spacing={1}>
					<ListItem>Датчик движения</ListItem>
					<ListItem>Биодиномическое освещение</ListItem>
				</UnorderedList>
				<Box className='absolute -right-32 top-12 -z-10 w-[350px]'>
					<Image
						src='/home/lamp.png'
						width={500}
						height={500}
						alt='lamp'
					/>
				</Box>
				<Box className='absolute right-12 top-48 -z-10'>
					<Image
						src='/home/central-lighting.png'
						width={168}
						height={168}
						alt='centarl-light'
					/>
				</Box>
			</Box>
		</Flex>
	);
};

export default LightingCard;
