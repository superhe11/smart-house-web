import Image from 'next/image';

import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const BrandSwitcher = () => {
	return (
		<Box
			as='section'
			className='relative mt-20 overflow-hidden rounded-[30px] p-14 pb-20'
		>
			<Flex className='flex-col lg:w-1/2'>
				<Heading as='h4' className='text-xl font-semibold lg:text-2xl'>
					31 бренд выключателей
				</Heading>
				<Heading
					as='h4'
					className='text-2xl font-bold text-red-400 lg:text-4xl'
				>
					для любого интерьера
				</Heading>
				<Text className='text-base lg:text-lg'>
					Кто то предпочитает дорогие выключатели с десятками интересных
					функций, а кому то достаточно самых простых кнопочных
					выключателей.
				</Text>
			</Flex>
			<Image
				className='absolute bottom-0 right-0 -z-20 h-full w-full  bg-cover object-cover lg:-top-0'
				src='/showroom/switch.jpg'
				width={1000}
				height={400}
				alt='bg'
			/>
			<Box className='absolute -top-20 left-0 -z-10 h-[115%] w-full rotate-[90deg] bg-gradient-to-r from-white from-[55%] sm:top-0  sm:rotate-0 lg:w-[70%]' />
		</Box>
	);
};

export default BrandSwitcher;
