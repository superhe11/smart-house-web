import Image from 'next/image';

import SubTitleDark from '@/components/SubTitleDark/SubTitleDark';
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const subTitleData = [
	{
		text: 'Выключение всего света в квартире',
	},
	{
		text: 'Включить вечерний свет',
	},
	{
		text: 'Закрыть или открыть шторы',
	},
	{
		text: 'Включить/выключить свет',
	},
	{
		text: 'и другие',
	},
];

const Switches = () => {
	return (
		<Center className='pt-20' flexDirection='column' position='relative'>
			<Heading textAlign='center' className='heading'>
				Выключатели
			</Heading>
			<Text
				textAlign='center'
				className='mt-2 max-w-3xl text-base leading-5'
			>
				Это классические выключатели. Почти классические. На одну кнопку
				можно разместить Десятки действий.
			</Text>
			<Center
				flexDirection='column'
				className='mt-4 gap-2 lg:w-2/5 lg:flex-row lg:flex-wrap'
			>
				{subTitleData.map((item, idx) => (
					<SubTitleDark
						key={idx}
						className='bg-[#E6E6E633] text-sm '
						text={item.text}
					/>
				))}
			</Center>
			<Flex>
				<Center className='mt-10 flex-wrap gap-5'>
					<Image
						src='/logo/basalte.png'
						width={160}
						height={46}
						alt='balte'
					/>
					<Image src='/logo/gira.png' width={160} height={46} alt='gira' />
					<Image src='/logo/jung.png' width={160} height={46} alt='jung' />
					<Image src='/logo/hdl.png' width={160} height={46} alt='hdl' />
					<Image
						src='/logo/lutron.png'
						width={160}
						height={46}
						alt='lutron'
					/>
				</Center>
			</Flex>
			<Box className='absolute left-0 top-0 -z-30 h-full w-full bg-[#212121] md:top-14' />
		</Center>
	);
};

export default Switches;
