import React from 'react';

import { Box } from '@/components/chakraUI/proxy/proxyChakra';

import { NavLink } from '../NavLink';
import styles from '../header.module.scss';

export const Nav = ({ navData }) => {
	return (
		<Box as='div'>
			<ul className={styles.header_list}>
				{navData.map((item) => (
					<li key={item.id}>
						<NavLink item={item} />
					</li>
				))}
			</ul>
		</Box>
	);
};
