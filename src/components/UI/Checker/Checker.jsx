'use client';

import { Switch } from '@/components/chakraUI/proxy/proxyChakra';

export const Checker = ({ children, checked }) => {
	return (
		<Switch
			className='flex items-center gap-2 rounded-xl bg-white/95 p-3'
			size='lg'
			onChange={(e) => checked((prev) => !prev)}
		>
			<span className='inline-block text-center'>{children}</span>
		</Switch>
	);
};
