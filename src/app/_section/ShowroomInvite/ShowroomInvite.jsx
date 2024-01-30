import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import ShowroomInfoCard from './ShowroomInfoCard/ShowroomInfoCard';

//TODO Add IMAGE
//TODO Add text box

const infoData = [
	{
		title: 'Узнайте про функционал',
		description:
			'Какие функции вам действительно необходимы, а на чем можно сэкономить.',
	},
	{
		title: 'Познакомьтесь с системой',
		description:
			'Какие функции вам действительно необходимы, а на чем можно сэкономить.',
	},
	{
		title: 'Выберите выключатели',
		description:
			'Какие функции вам действительно необходимы, а на чем можно сэкономить.',
	},
];

const ShowroomInvite = () => {
	return (
		<Box as='section' mt='80px'>
			<Center w='full' flexDirection='column' gap='10px'>
				<Heading className='heading_medium text-center'>
					Приглашаем в шоурум
				</Heading>
				<Text className='text-center text-base font-medium lg:w-2/5'>
					Мы побывали в десятках лучших шоурумах мира и каждый раз
					дополняли свой функционал самыми интересными решениями.
				</Text>
			</Center>
			<Flex className='mt-10 flex-col items-center justify-between gap-10 md:flex-row'>
				{infoData.map((item, idx) => (
					<ShowroomInfoCard key={idx} info={item} />
				))}
			</Flex>
		</Box>
	);
};

export default ShowroomInvite;
