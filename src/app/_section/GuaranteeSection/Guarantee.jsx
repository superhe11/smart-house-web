'use client';

import Image from 'next/image';
import Link from 'next/link';

import SubTitleDark from '@/components/SubTitleDark/SubTitleDark';
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import useMediaQuery from '@/hooks/useMediaQuery';

import FiveDesktop from './SVG/FiveDesktop';
import FiveMobile from './SVG/FiveMobile';

const Guarantee = () => {
	const isAboveSmallQuery = useMediaQuery('(min-width: 640px)');

	return (
		<Flex
			as='section'
			className='relative mt-20 h-[755px] flex-col  overflow-hidden rounded-[30px] pb-5 pt-6 sm:h-auto sm:flex-row '
		>
			{/* TITLE AND TEXT */}
			<Center
				flexDirection='column'
				gap='6'
				className='gap-3 sm:ml-4 sm:w-1/2 sm:items-baseline md:ml-10'
			>
				<SubTitleDark
					text='на всю нашу продукцию'
					className='bg-black/10'
				/>
				<Heading
					as='h2'
					fontSize='5xl'
					lineHeight='45px'
					textAlign='center'
					fontWeight='bold'
					className='sm:text-left sm:text-3xl'
				>
					5 лет <br className='sm:hidden' />
					Гарантии
				</Heading>
				<Text
					as='p'
					textAlign='center'
					fontSize='15px'
					mt='7px'
					className='text-[#1D1D1D] sm:text-left'
				>
					Самая длительная гарантия на рынке <br /> и круглосуточная
					поддержка по любым вопросам
				</Text>
				<Link href='/price' className='button-price'>
					Рассчитать стоимость
				</Link>
			</Center>

			{/* IMAGE SVG ON LEFT */}
			<Box className='-z-10 sm:absolute  sm:-right-20 sm:-top-6 sm:-translate-x-0 sm:rotate-[2deg] sm:scale-[.85] md:rotate-0'>
				{isAboveSmallQuery ? <FiveDesktop /> : <FiveMobile />}
			</Box>

			{/* BG IMAGE */}
			<Box className='guarantee_image_box'>
				<Image
					src='/home/GuaranteeMobile.png'
					alt='background'
					width={400}
					height={784}
					className='lg:hidden'
				/>
				<Image
					src='/home/GuarenteeDesktop.png'
					alt='background'
					width={1440}
					height={450}
					className='hidden lg:block'
				/>
			</Box>
		</Flex>
	);
};

export default Guarantee;
