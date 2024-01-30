import Image from 'next/image';

import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import AboutUsCardInfo from './AboutUsCardInfo/AboutUsCardInfo';

const infoData = [
	{
		count: '5000+',
		description: 'реализованных проектов по всему миру на начало 2022 года',
	},
	{
		count: '400+',
		description: 'дизайнеров и дилеров рекомендуют систему MimiSmart',
	},
	{
		count: '250+',
		description: 'специалистов работают над развитием продукта MimiSmart ',
	},
	{
		count: '50+',
		description: 'успешно работающих филиалов по всему миру',
	},
];

const logoData = [
	{
		logoName: 'Vimar',
	},
	{
		logoName: 'Bticino',
	},
	{
		logoName: 'Shneider',
	},
	{
		logoName: 'Mail',
	},
	{
		logoName: 'Somfy',
	},
	{
		logoName: 'Yandex',
	},
	{
		logoName: 'CenterLight',
	},
];

const AboutUs = () => {
	return (
		<Box as='section' id='about' mt='80px'>
			<Center className='w-full' flexDirection='column' gap='10px'>
				<Heading as='h2' textAlign='center' className='heading_medium '>
					О компании <br /> MiMiSmart
				</Heading>
				<Text textAlign='center'>
					за 17 лет мы стали самой покупаемой системой умный дом в России
				</Text>
			</Center>
			<Flex className='mt-10 flex-col gap-10 md:flex-row'>
				{infoData.map((item, idx) => (
					<AboutUsCardInfo key={idx} info={item} />
				))}
			</Flex>
			<Flex className='mt-10 flex-wrap justify-between gap-5 lg:flex-nowrap'>
				{logoData.map((name, idx) => (
					<Image
						key={idx}
						src={`/logo/Desktop/${name.logoName}.png`}
						width={160}
						height={40}
						alt={name.logoName}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default AboutUs;
