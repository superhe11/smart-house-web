import SubTitle from '@/components/SubTitle/SubTitle';
import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import ClimateCard from './_components/ClimateCard/ClimateCard';
import CurtainsCard from './_components/CurtainsCard/CurtainsCard';
import ElectrCard from './_components/ElectrCard/ElectrCard';
import LightingCard from './_components/LightingCard/LightingCard';
import MediaCard from './_components/MediaCard/MediaCard';
import SecurityCard from './_components/SecurityCard/SecurityCard';

//TODO
//
const Functionality = () => {
	return (
		<>
			{/* Func Section  Что может умный дом */}
			<Center
				as='section'
				id='functionality'
				className='mt-20 block font-main'
			>
				<Flex flexDirection={'column'} alignItems={'center'} gap={'20px'}>
					<SubTitle>функционал</SubTitle>
					<Flex flexDirection={'column'} gap={'10px'}>
						<Heading
							as='h2'
							textAlign={'center'}
							fontWeight={'bold'}
							className='text-3xl lg:text-5xl'
						>
							Что может
							<br /> умный дом?
						</Heading>
						<Text as='p' textAlign={'center'} className='text-[17px]'>
							возможности, доступные при <br /> установке системы
							MimiSmart
						</Text>
					</Flex>
				</Flex>

				{/* CARD START */}
				<ElectrCard />
				<Flex as='div' mt='6' className='flex-col gap-6 md:flex-row'>
					<LightingCard />
					<SecurityCard />
				</Flex>
				<Flex as='div' mt='6' className='flex-col gap-6 md:flex-row'>
					<ClimateCard />
					<CurtainsCard />
				</Flex>
				<MediaCard />
				{/* CARD END */}
			</Center>
		</>
	);
};

export default Functionality;
