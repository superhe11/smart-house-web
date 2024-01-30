import { Text } from '@/components/chakraUI/proxy/proxyChakra';

const SubTitleDark = ({ text, className }) => {
	return (
		<Text
			as='p'
			fontWeight='semibold'
			rounded='40px'
			py='1.5'
			px='3.5'
			className={`sm:text-sm ${className}`}
		>
			{text}
		</Text>
	);
};

export default SubTitleDark;
