import Image from 'next/image';

import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import ApplicationCard from './ApplicationCard/ApplicationCard';

const cardData = [
	{
		heading: 'Управляй светом',
		body: 'Настраивай яркость света и цвета в любой комнате дома',
		imgName: 'app-card1',
		phoneImg: 'phone-app1',
	},
	{
		heading: 'Управляй климатом',
		body: 'Включай кондиционер, вентиляцию, настраивай нужную температуру в каждом помещении',
		imgName: 'app-card2',
		phoneImg: 'phone-app2',
	},
	{
		heading: 'Управляй мультимедиа',
		body: 'Включай все девайсы: телевизор, домашний кинотеатр, колонки с помощью телефона',
		imgName: 'app-card3',
		phoneImg: 'phone-app3',
	},
	{
		heading: 'Управляй безопасностью',
		body: 'Приложение позволит в любое время суток в любом месте контролировать безопасность квартиры, дома, дачи, гаража',
		imgName: 'app-card4',
		phoneImg: 'phone-app4',
	},
];

const Application = () => {
	return (
		<Box className='relative py-10 pt-5'>
			<Heading as='h2' className='heading' textAlign='center'>
				Приложение
			</Heading>
			<Center className='mt-9 w-full flex-col gap-5 px-2 lg:flex-row lg:flex-wrap '>
				{cardData.map((card, idx) => (
					<ApplicationCard key={idx} card={card} />
				))}
			</Center>
			<Box className='absolute bottom-0 left-0 -z-30 h-full w-full bg-[#212121]' />
		</Box>
	);
};

export default Application;
