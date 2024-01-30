import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const AboutUsCardInfo = ({ info }) => {
	return (
		<Flex gap='20px' className='items-center md:flex-col md:items-start'>
			<Heading
				as='h4'
				fontSize='48px'
				fontWeight='bold'
				lineHeight='46px'
				className='w-1/2 text-[#444] md:w-auto'
			>
				{info.count}
			</Heading>
			<Text fontSize='15px' className='w-1/2 md:w-auto lg:w-3/4'>
				{info.description}
			</Text>
		</Flex>
	);
};

export default AboutUsCardInfo;
