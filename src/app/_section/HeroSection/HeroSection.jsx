'use client';

import Image from 'next/image';

import { CardChecker } from '@/components/CardChecker/CardChecker';
import { PriceButton } from '@/components/UI/PriceButton/PriceButton';
import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import HeroSwiper from './_components/HeroSwiper';

export const card = [
	{
		title: 'Освещение',
		description:
			'Основное освещение меняет цвет (от холодного к теплому) и яркость свечения» в зависимости от времени суток.',
		className: 'left-16 top-[55%]',
	},
	{
		title: 'Шторы',
		description:
			'Система самостоятельно откроет шторы или группы штор по времени суток или с вашей команды.',
		className: 'left-[35%] top-[45%]',
	},
	{
		title: 'Камеры',
		description:
			'Вы можете в online режиме наблюдать за тем, что происходит пока вас нет дома.',
		className: 'left-16 top-2/3',
	},
	{
		title: 'Ворота',
		description:
			'Удобное открытие и закрытие любых электроворот и электрозамков по вашей команде.',
		className: 'left-96 top-[77%]',
	},
	{
		title: 'Протечка',
		description:
			'Датчик врезается в плитку и выглядит эстетично. При протечке система самостоятельно перекроет воду.',
		className: 'left-[42rem] xl:left-[54rem] top-1/3',
	},
	{
		title: 'Климат',
		description:
			'Умный дом знает, какая температура воздуха вам комфортна. Знает, как ее поддерживать. Когда включить отопление, а когда кондиционер или вентиляцию.',
		className: 'left-[36rem] xl:left-[48rem]  top-2/3',
	},
	{
		title: 'Музыка',
		description:
			'Музыка в доме будет следовать за вами. Вы сможете отправлять голосовые сообщения в любую комнату.  А система домашнего кинотеатра по одной команде подготовит комнату к просмотру кино (плавно выключит свет и закроет шторы), включит TV с аудиосистемой.',
		className: 'left-[49rem] xl:left-[62rem]  top-[58%]',
	},
];

const HeroSection = () => {
	return (
		<Center
			as='section'
			id='home'
			className='relative  mt-12 flex flex-col items-center overflow-hidden pt-16'
		>
			<Flex as='div' flexDirection='column' alignItems='center' gap='32px'>
				{/* TITLE HERO SECTION */}
				<Box as='div' className='flex flex-col items-center gap-3'>
					<Heading
						as='h1'
						textAlign='center'
						fontWeight='bold'
						className='w-auto font-main text-5xl lg:text-[68px] lg:leading-[66px]'
					>
						Умный дом
						<br /> под ключ
					</Heading>
					<Text as='p' textAlign='center' className='text-base'>
						российский производитель
						<br /> современной электрики
					</Text>
				</Box>
				{/* CUSTOM BUTTON */}
				<PriceButton>Расчитать стоймость</PriceButton>
			</Flex>
			{/* CHECKER ON IMAGE  */}
			{card.map((card, idx) => (
				<CardChecker
					key={idx}
					className={`absolute hidden lg:block  ${card.className}`}
					card={card}
				/>
			))}
			{/* MAIN IMAGE */}
			<Box className='-z-10 hidden w-1/2  lg:flex lg:h-[700px] xl:h-[1000px]'>
				<Image
					src='/home/home.png'
					className='-z-10  lg:translate-y-8 xl:-translate-y-6'
					alt='home'
					fill
				/>
			</Box>
			{/* BG SECTION */}
			<Box className='absolute top-0 -z-20  h-[75%] w-full rounded-3xl bg-[#EBE7E6] md:h-[85%]  lg:block lg:h-[95%]' />

			{/* IMAGE MOBILE */}
			<Image
				src='/home/home.png'
				className='md:h-3/4 md:w-3/4 lg:hidden'
				alt='home'
				width={400}
				height={445}
			/>
			{/* SWIPER ON SMALL SCREEN */}
			<Box width='full' className='pb-2 lg:hidden'>
				<HeroSwiper />
			</Box>
		</Center>
	);
};

export default HeroSection;
