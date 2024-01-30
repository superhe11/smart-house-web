'use client';

import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

import CardSwiper from './CardSwiper';
import Loading from '@/app/loading';
import { getCardsSWR } from '@/redux/slices/cardSlice';
import { getAllCard } from '@/service/getAllCard';

const HeroSwiper = () => {
	const { isLoading } = getCardsSWR();
	const data = useSelector((state) => state.card.data);

	if (isLoading) return <Loading />;

	return (
		<Swiper
			spaceBetween={20}
			modules={[Pagination]}
			slidesPerView={1.2}
			pagination={{
				clickable: true,
			}}
			className='m-5'
			breakpoints={{
				768: {
					slidesPerView: 1.8,
				},
			}}
		>
			{/* ITEM SWIPER */}
			{data.map((card, idx) => (
				<SwiperSlide key={idx} className='pb-3'>
					<CardSwiper card={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSwiper;
