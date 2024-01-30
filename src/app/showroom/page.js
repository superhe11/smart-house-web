import React, { Suspense } from 'react';

import { DistShowroom, ShowroomForm } from '../_section';

import BrandSwitcher from './_section/BrandSwitcher/BrandSwitcher';
import Description from './_section/Description/Description';
import Hero from './_section/Hero/Hero';
import SensorLight from './_section/SensorLight/SensorLight';
import Loading from './loading';

export const revalidate = 60;

const page = () => {
	return (
		<Suspense fallback={<Loading />}>
			<h1>showroom</h1>
			<Hero />
			<Description />
			<BrandSwitcher />
			<SensorLight />
			<ShowroomForm />
			<DistShowroom />
		</Suspense>
	);
};

export default page;
