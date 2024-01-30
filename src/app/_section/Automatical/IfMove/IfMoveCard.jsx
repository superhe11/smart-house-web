import React from 'react';

import { Box, Flex, Text } from '@/components/chakraUI/proxy/proxyChakra';

const IfMoveCard = ({ firtsText, secondText, subtitle }) => {
	return (
		<Flex flexDirection='column' className='automaticall_card p-5'>
			<Flex className='items-center'>
				<Box className='automaticall_card_little min-w-2/5'>
					{firtsText}
				</Box>
				<Text className=' mx-1'> = </Text>
				<Box className='automaticall_card_little min-w-2/5'>
					{secondText}
				</Box>
			</Flex>
			<Text className='mt-2 text-sm '>{subtitle}</Text>
		</Flex>
	);
};

export default IfMoveCard;
