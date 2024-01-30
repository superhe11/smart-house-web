'use client';

import { useState } from 'react';

import {
	Heading,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
} from '@/components/chakraUI/proxy/proxyChakra';

import { Checker } from '@/UI/Checker/Checker';

export const CardChecker = ({ className, card }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Popover isOpen={isOpen} placement='top'>
				<PopoverTrigger key={Checker}>
					<button className={className}>
						<Checker checked={setIsOpen}>{card?.title}</Checker>
					</button>
				</PopoverTrigger>
				<PopoverContent width={'auto'} p='24px'>
					<PopoverHeader>
						<Heading as='h3' className='text-xl font-normal'>
							{card?.title}
						</Heading>
					</PopoverHeader>
					<PopoverBody width='310px'>
						<p className='text-mainGray'>{card?.description}</p>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
};
