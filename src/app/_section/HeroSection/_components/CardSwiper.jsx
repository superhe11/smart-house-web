import {
	Card,
	CardBody,
	CardHeader,
	Heading,
} from '@/components/chakraUI/proxy/proxyChakra';

const CardSwiper = ({ card }) => {
	return (
		// ITEM
		<Card as='div' boxShadow='md' className='rounded-3xl p-6 text-left'>
			<CardHeader p='0' mb='12px'>
				<Heading as='h3' className='text-xl font-normal leading-6'>
					{card?.title}
				</Heading>
			</CardHeader>
			<CardBody p='0' className='text-lg leading-5'>
				{card?.description}
			</CardBody>
		</Card>
	);
};

export default CardSwiper;
