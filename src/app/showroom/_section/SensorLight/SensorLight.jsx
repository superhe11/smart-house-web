import Image from 'next/image';

import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const SensorLight = () => {
	return (
		<>
			<Flex as='section' className='mt-5 flex-col gap-5 lg:flex-row'>
				<Flex className='bg-showroom-sensor relative w-full flex-col overflow-hidden px-7 pb-28 pt-5 lg:w-3/5'>
					<Center className='w-full flex-col'>
						<Heading className='text-2xl font-bold text-green-700'>
							14 видов датчиков
						</Heading>
						<Text className='text-center text-base text-zinc-700'>
							С помощью различных датчиков система сама определяет какие
							действия совершать, .
						</Text>
					</Center>
					<Image
						className='absolute bottom-0 right-0'
						src='/showroom/sensor.png'
						width={300}
						height={300}
						alt='sensor'
					/>
				</Flex>
				<Flex className='bg-showroom-lamp relative w-full flex-col overflow-hidden px-7 pb-36 pt-5 lg:w-2/5'>
					<Center className='flex-col'>
						<Heading className='text-2xl font-bold text-orange-400'>
							17 групп света
						</Heading>
						<Text className='text-center text-base text-zinc-700'>
							В одной комнате мы сделали концентрацию разных
							светильников, чтобы наглядно показать, как можно удобно ими
							управлять без “пианино” из выключателей.
						</Text>
					</Center>
					<Image
						className='absolute bottom-0 right-0'
						src='/showroom/lamp.png'
						width={250}
						height={250}
						alt='lamp'
					/>
				</Flex>
			</Flex>
			<Center className=' flex-col'>
				<Box className='max-w-[650px]'>
					<Heading className='mt-10 text-center'>
						...и многое другое!
					</Heading>
					<Text className='mt-5'>
						Мы собрали десятки брендов среди которых вы можете подобрать
						оптимальные: выключатели, электро-шторы, систему
						кондиционирования, вентиляции и увлажнения, акустику,
						кинотеатр, видео-наблюдение и многое другое.У нас вы получите
						полноценное решение для всех разделов инженерии под ключ.
					</Text>
				</Box>
			</Center>
		</>
	);
};

export default SensorLight;
