import Image from 'next/image';

import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const DistShowroom = () => {
	return (
		<Box as='section' className='mt-20'>
			<Center>
				<Heading as='h2' textAlign='center' className='heading_medium'>
					Если у вас нет времени <br /> посетить шоурум
				</Heading>
			</Center>
			<Center className='mt-10 flex-col gap-5 md:flex-row'>
				<Center className='flex-col rounded-[20px] bg-lightWhite px-5 py-8'>
					<Heading className='text-center text-xl font-bold text-zinc-800 lg:text-3xl'>
						Демонстрационный <br /> чемоданчик
					</Heading>
					<Text className='mt-2 text-center text-zinc-600'>
						Можем выехать на объект с ним и продемонстрировать как
						работает умный дом
					</Text>
					<Image
						src='/home/travel-box.png'
						alt='travel-box'
						width={120}
						height={120}
						className='mt-8'
					/>
				</Center>
				<Center className='flex-col rounded-[20px] bg-lightWhite px-5 py-8'>
					<Heading className='text-center text-xl font-bold text-zinc-800 lg:text-3xl'>
						Дистанционная <br /> демонстрация системы
					</Heading>
					<Text className='mt-2 text-center text-zinc-600'>
						Покажем как работает умный дом через Zoom, Skype или любой
						удобный вам сервис
					</Text>
					<Image
						src='/home/monitor.png'
						alt='travel-box'
						width={120}
						height={120}
						className='mt-8'
					/>
				</Center>
			</Center>
		</Box>
	);
};

export default DistShowroom;
