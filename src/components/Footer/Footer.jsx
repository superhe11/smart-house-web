import Image from 'next/image';
import Link from 'next/link';

import {
	Box,
	Center,
	EmailIcon,
	Flex,
	HStack,
	Heading,
	PhoneIcon,
	Text,
	VStack,
} from '@/components/chakraUI/proxy/proxyChakra';

const Footer = () => {
	return (
		<Box id='#contact' as='footer' className='container my-20  text-gray-600'>
			<Center className='flex-col gap-20 lg:flex-row lg:items-start lg:justify-between'>
				<VStack className='items-center'>
					<Image
						src='/SVG/MiMiSmart-Logo.svg'
						alt='logo'
						width={120}
						height={25}
					/>
					<HStack className='mt-10 gap-5'>
						<Link href='/'>
							<Image
								src='/SVG/telegram.svg'
								alt='telegram'
								width={40}
								height={40}
							/>
						</Link>
						<Link href='/'>
							<Image
								src='/SVG/instagram.svg'
								alt='telegram'
								width={40}
								height={40}
							/>
						</Link>
						<Link href='/'>
							<Image
								src='/SVG/youtube.svg'
								alt='telegram'
								width={40}
								height={40}
							/>
						</Link>
					</HStack>
				</VStack>
				<Flex className='flex-col gap-20 lg:flex-row'>
					<VStack className='lg:items-start'>
						<Heading className='text-center text-xl font-medium text-zinc-800 lg:text-2xl'>
							Контакты
						</Heading>
						<HStack>
							<PhoneIcon as='svg' />
							<Text>8 800 505-20-53</Text>
						</HStack>
						<HStack>
							<EmailIcon as='svg' />
							<Text>msk@mimismart.ru</Text>
						</HStack>
					</VStack>
					<VStack className='lg:items-start'>
						<Heading className='text-center text-xl font-medium text-zinc-800 lg:text-2xl'>
							Как к нам добраться?
						</Heading>
						<Text>г. Москва,</Text>
						<Text>Новоданиловская наб., 6к1</Text>
					</VStack>
				</Flex>
			</Center>
		</Box>
	);
};

export default Footer;
