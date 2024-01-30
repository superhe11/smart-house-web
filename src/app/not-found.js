import Link from 'next/link';

import {
	Box,
	Center,
	ChevronRightIcon,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

export default function NotFound() {
	return (
		<Center
			as='section'
			my='276px'
			h='full'
			flexDirection='column'
			gap='20px'
		>
			<Heading textAlign='center'>
				Ой... Такой страницы <br /> больше нет...
			</Heading>
			<Text>Посмотрите лучше главную 😊</Text>
			<Link
				href='/'
				className='button-price flex items-end justify-between gap-5 px-7 '
			>
				На главную
				<span>
					<ChevronRightIcon boxSize='20px' />
				</span>
			</Link>
			<div className='not_found_gradient absolute bottom-[32rem] -z-10 h-[1000px] w-full lg:bottom-40' />

			<div className='absolute bottom-0 -z-20 h-[1000px] w-full bg-gradient-to-t from-white' />
			<img
				src='/SVG/vector-bg.svg'
				alt='bg-svg'
				className='absolute bottom-0  -z-30 hidden w-full lg:block '
			/>
		</Center>
	);
}
