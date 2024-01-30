import { Box, Heading } from '@/components/chakraUI/proxy/proxyChakra';

const SubTitle = ({ children }) => {
	return (
		<Box
			as='div'
			px={'14px'}
			py={'6px'}
			width={'auto'}
			background='main.White.800'
			rounded={'40px'}
		>
			<Heading
				textColor={'main.Gray.800'}
				fontWeight={'semibold'}
				size='xs'
				as='h6'
				lineHeight={'20px'}
				className='font-main'
			>
				{children}
			</Heading>
		</Box>
	);
};

export default SubTitle;
