import Image from 'next/image';

import {
	Box,
	Flex,
	Heading,
	ListItem,
	UnorderedList,
} from '@/components/chakraUI/proxy/proxyChakra';

import styles from '../../functionality.module.scss';

const CurtainsCard = () => {
	return (
		<Flex
			as='div'
			flexDirection={'column'}
			className='w-full md:w-2/5 lg:mr-20'
		>
			<Box className={styles.card_secondary}>
				<Heading as='h4' className={styles.main_title}>
					Шторы
				</Heading>
				<UnorderedList mt='4' spacing={1}>
					<ListItem>Работа по таймеру и в сценариях</ListItem>
					<ListItem className='hidden lg:list-item'>
						Управление со смартфона, голосом и клавишными выключаателями
					</ListItem>
					<ListItem>Объединение в группы</ListItem>
				</UnorderedList>
				<Box className='absolute right-0 top-32 -z-10  w-[335px] lg:top-48'>
					<Image
						src='/home/curtains.png'
						width={500}
						height={500}
						alt='lamp'
					/>
				</Box>
			</Box>
		</Flex>
	);
};

export default CurtainsCard;
