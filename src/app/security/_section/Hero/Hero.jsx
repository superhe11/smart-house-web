import Image from 'next/image';

import SubTitle from '@/components/SubTitle/SubTitle';
import { PriceButton } from '@/components/UI/PriceButton/PriceButton';
import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const Hero = () => {
	return (
		<Box as='section' pt='220px' position='relative' className='h-full'>
			<Center className='flex-col gap-5'>
				<Box>
					<SubTitle>безопастность</SubTitle>
				</Box>
				<Heading textAlign='center' className='text-5xl'>
					Защити свой дом <br /> и будь спокоен
				</Heading>
				<Text textAlign='center' className='text-lg'>
					Умный дом никогда не спит
				</Text>
				<PriceButton>Рассчитать стоймость</PriceButton>
			</Center>

			<Image
				className='absolute -right-0 top-14 -z-10 rotate-12 -scale-x-100 blur-[8px]'
				src='/image-decoration/lamp.png'
				width={200}
				height={200}
				alt='decor'
			/>
			<Image
				className='absolute right-96 top-96 -z-10 rotate-12 -scale-x-100 blur-[8px]'
				src='/image-decoration/switch.png'
				width={200}
				height={200}
				alt='decor'
			/>
			<Image
				className='absolute left-0 top-36 -z-10 -rotate-12 blur-[3px]'
				src='/security/lock.png'
				width={400}
				height={400}
				alt='decor'
			/>
		</Box>
	);
};

export default Hero;
