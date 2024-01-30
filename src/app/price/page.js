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
	VStack,
} from '@/components/chakraUI/proxy/proxyChakra';

const page = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: {
			name: '',
			phoneNumber: '',
			email: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (value) => {
		const phone = '+' + value.phoneNumber;
		value.phoneNumber = phone;
		console.log(value);
	};

	return (
		<Box as='section' my='220px'>
			<Center>
				<VStack>
					<Heading fontSize='36px' textAlign='center'>
						Оставьте ваши данные и <br /> мы свяжемся с вами
					</Heading>
					<form className='max-w-[400px]'>
						<VStack gap='20px'>
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
								<FormLabel htmlFor='phoneNumber'>
									Ваш телефон*
								</FormLabel>
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
							<Button
								type='submit'
								className='button-price w-full self-center bg-orange-400 text-zinc-800 hover:text-white'
							>
								Оставить заявку
							</Button>
						</VStack>
					</form>
				</VStack>
			</Center>
		</Box>
	);
};

export default page;
