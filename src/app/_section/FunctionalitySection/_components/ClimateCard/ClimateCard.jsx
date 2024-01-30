import Image from 'next/image';

import {
	Box,
	Flex,
	Heading,
	ListItem,
	UnorderedList,
} from '@/components/chakraUI/proxy/proxyChakra';

import styles from '../../functionality.module.scss';

const ClimateCard = () => {
	return (
		<Flex
			as='div'
			flexDirection={'column'}
			className='w-full md:w-3/5 lg:ml-20'
		>
			<Box className={styles.card_secondary}>
				<Heading as='h4' className={styles.main_title}>
					Климат-контроль
				</Heading>
				<UnorderedList mt='4' spacing={1}>
					<ListItem>Теплый пол</ListItem>
					<ListItem>Конвекторы</ListItem>
					<ListItem>Радиаторы</ListItem>
					<ListItem>Кондиционеры</ListItem>
					<ListItem>Вентиляция</ListItem>
					<ListItem>Увлажнение</ListItem>
				</UnorderedList>
				<Box className='absolute -right-24 top-28 -z-10 w-[360px] md:w-[450px]'>
					<Image
						src='/home/climate.png'
						width={600}
						height={600}
						alt='climate'
					/>
				</Box>
			</Box>
		</Flex>
	);
};

export default ClimateCard;
