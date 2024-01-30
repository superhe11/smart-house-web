import { ShowroomForm } from '../_section';

import Description from './_section/Description/Description';
import Hero from './_section/Hero/Hero';

const page = () => {
	return (
		<>
			<Hero />
			<Description />
			<ShowroomForm />
		</>
	);
};

export default page;
