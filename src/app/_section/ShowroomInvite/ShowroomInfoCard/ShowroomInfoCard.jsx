import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const ShowroomInfoCard = ({ info }) => {
	return (
		<Box>
			<Heading
				as='h4'
				className='text-center text-xl font-bold text-zinc-800 lg:text-3xl'
			>
				{info.title}
			</Heading>
			<Text as='p' className='mt-2 text-center text-zinc-600'>
				{info.description}
			</Text>
		</Box>
	);
};

export default ShowroomInfoCard;
