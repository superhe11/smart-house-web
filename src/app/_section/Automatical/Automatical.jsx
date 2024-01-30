'use client';

import { Application, Switches } from '..';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import IfMove from './IfMove/IfMove';

const Automatical = () => {
	const data = useSelector((state) => state.ifMove.data);
	return (
		<>
			<Flex
				as='section'
				id='control'
				textColor='#fff'
				className='relative mx-auto mt-120 flex-col overflow-hidden rounded-[20px] sm:w-3/5 lg:w-full'
			>
				<Flex
					flexDirection='column'
					alignItems='start'
					className='mx-[10px] mt-10 w-5/6 xl:mx-10'
				>
					<Heading
						as='h3'
						fontWeight='bold'
						className='text-3xl md:text-5xl md:leading-[46px] '
					>
						Положитесь <br />
						на автоматизации
					</Heading>
					<Text className='mt-2 text-base font-medium'>
						для запуска автоматизаций используются датчики,
						<br className='hidden lg:block' /> которые размещаются там,
						где вам они необходимы
					</Text>
				</Flex>
				<Box className='mx-[10px] mt-12 xl:mx-10'>
					{/* LINE TEXT ЕСЛИ И ДЕЙСТВИЕ */}
					<Flex>
						<Flex className='flex-col pb-10 lg:flex-row'>
							<IfMove data={data.slice(0, 1)} lable='Если' />
							<IfMove data={data.slice(1, 3)} lable='Действие' />
							<IfMove data={data.slice(3, 4)} lable='Если' />
							<IfMove data={data.slice(4, 6)} lable='Действие' />
						</Flex>
					</Flex>
				</Box>
				{/* BG IMAGE */}
				<Box className='absolute -z-30 h-full  w-full  bg-gradient-to-t from-black  lg:hidden'>
					<Image
						src='/home/AutomMobile.png'
						width={1000}
						height={2075}
						alt='background'
						className='h-1/2 w-full bg-cover object-cover md:h-auto'
					/>
				</Box>
				<Box className='gradient_dark absolute  -z-30 hidden h-full w-full  lg:block'>
					<Image
						src='/home/AutomDesktop.png'
						width={4000}
						height={2000}
						alt='background'
						className='h-1/3 w-full bg-cover object-cover'
					/>
				</Box>
				{/* TWO LAST SECTION */}
				<Switches />
				<Application />
				{/* BG ON LAST SECTION */}
				<Box className='radial_gradient  absolute bottom-1/3 left-1/4 -z-20 hidden h-1/2 w-1/2 animate-pulse lg:block' />
				<Box className='gradient_bg absolute bottom-0 left-0 -z-20 hidden h-1/2 w-full blur-2xl lg:block' />
			</Flex>
		</>
	);
};

export default Automatical;
