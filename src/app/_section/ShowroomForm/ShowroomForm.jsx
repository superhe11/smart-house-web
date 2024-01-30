'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
	Box,
	Button,
	Center,
	Checkbox,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const ShowroomForm = () => {
	const [emailChecked, isEmailChecked] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: {
			name: '',
			phoneNumber: '',
			email: '',
			date: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (value) => {
		const phone = '+' + value.phoneNumber;
		value.phoneNumber = phone;
		console.log(value);
	};

	return (
		<Box
			as='section'
			className='background_form relative mt-20 overflow-hidden px-10 py-8'
		>
			<Center>
				<Heading className='max-w-[550px] text-center'>
					Когда вы хотите посетить шоурум?
				</Heading>
			</Center>

			<form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
				<Center>
					<Flex className='flex-col items-baseline justify-between gap-5 md:w-1/2 lg:w-auto lg:flex-row'>
						<FormControl isInvalid={errors.name}>
							<FormLabel htmlFor='name'>Ваше имя*</FormLabel>
							<Input
								id='name'
								className='form_input'
								placeholder='Имя'
								{...register('name', {
									required: 'Name required field',
									minLength: {
										value: 3,
										message: 'Минимальная длинна 3 символа',
									},
									pattern: {
										value: /^[А-ЯЁ][а-яё]*$/i,
										message: 'Только буквы',
									},
								})}
							/>
							<FormErrorMessage>
								{errors.name && errors.name.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={errors.phoneNumber}>
							<FormLabel htmlFor='phoneNumber'>Ваш телефон*</FormLabel>
							<Input
								id='phoneNumber'
								className='form_input'
								{...register('phoneNumber', {
									required: 'phone required field',
									minLength: {
										value: 10,
										message: 'Минимальная длинна 10 символов',
									},
								})}
								type='number'
								placeholder='+7 900 123 00 00'
							/>
							<FormErrorMessage>
								{errors.phoneNumber && errors.phoneNumber.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='email'>Ваша почта</FormLabel>
							<Input
								id='email'
								{...register('email')}
								className='form_input'
								type='email'
								placeholder='Почта'
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Дата</FormLabel>
							<Input
								id='email'
								{...register('date', {})}
								className='form_input px-4 py-1'
								placeholder='Дата'
								type='date'
								disabled={emailChecked}
							/>
							<Checkbox
								iconColor='blue.200'
								colorScheme='whiteAlpha'
								mt='8px'
								className='text-xs'
								onChange={(e) => isEmailChecked((prev) => !prev)}
							>
								Не определился
							</Checkbox>
						</FormControl>
						<Button
							type='submit'
							className='button-price w-full self-center bg-orange-400 text-zinc-800 hover:text-white'
						>
							Записаться в шоурум
						</Button>
					</Flex>
				</Center>
				<Text as='span' className='text-gray-400'>
					*обязательные поля
				</Text>
			</form>
			<Image
				src='/Image-decoration/tut.png'
				alt='icon'
				width={250}
				height={200}
				className='absolute -top-24 left-16	-z-10 hidden -rotate-[195deg] -scale-y-100 blur-sm lg:block'
			/>
		</Box>
	);
};

export default ShowroomForm;
