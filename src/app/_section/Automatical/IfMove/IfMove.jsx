import React from 'react';

import { Box, Flex, Text } from '@/components/chakraUI/proxy/proxyChakra';

import IfMoveCard from './IfMoveCard';

const IfMove = ({ data, lable }) => {
	return (
		<Flex gap='12px' className='lg:flex-col'>
			<Box className=' border-l-2 border-t-2 pb-5 pr-10'></Box>
			<Box className='pb-5 sm:pb-0 sm:pr-4'>
				<Text>{lable}</Text>
				{data.map((item, idx) => (
					<IfMoveCard
						key={idx}
						firtsText={item.firtsText}
						secondText={item.secondText}
						subtitle={item.subtitle}
					/>
				))}
			</Box>
		</Flex>
	);
};

export default IfMove;
