import Image from 'next/image';

import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const logoData = [
	{
		logoName: 'Vimar',
	},
	{
		logoName: 'Bticino',
	},
	{
		logoName: 'Shneider',
	},
	{
		logoName: 'Mail',
	},
	{
		logoName: 'Somfy',
	},
	{
		logoName: 'Yandex',
	},
	{
		logoName: 'CenterLight',
	},
];

const Description = () => {
	return (
		<Box>
			<Center mt='220px' flexDirection='column'>
				<Image
					src='/security/home.png'
					width={879}
					height={480}
					alt='home'
					className='rounded-[10px]'
				/>
				<Text maxWidth='640px' mt='40px'>
					За безопасность в Умном Доме отвечает большой набор передовых
					систем. Все они призваны обеспечить надежную защиту от
					непредвиденных ситуаций, будь то аварийная протечка воды, попытка
					несанкционированного доступа или возгорание из-за не выключенного
					в спешке утюга.
				</Text>
			</Center>
			<Center mt='80px' flexDirection='column' gap='40px'>
				<Flex flexDirection='column' gap='16px'>
					<Heading as='h3' textAlign='left'>
						Ключевые преимущества
					</Heading>
					<Text maxWidth='640px' mt='16px'>
						Сценарий «Имитация присутствия»
					</Text>
					<Text maxWidth='640px'>
						Система MiMismart позволит настроить жизнь дома в ваше
						отсутствие. Собираетесь в командировку или отпуск? Сторонние
						наблюдатели не заметят вашего отъезда. Умный Дом полностью
						имитирует присутствие хозяев. Вечером закроются: шторы,
						загорится свет, включится музыка или телевизор.
					</Text>
				</Flex>
				<Flex flexDirection='column' gap='16px'>
					<Heading as='h3' textAlign='left'>
						Сценарий «Охрана»
					</Heading>
					<Text maxWidth='640px'>
						При попытке злоумышленника взломать дверь или окно система
						безопасности в Умном Доме включит на максимальную мощность
						колонки мультирума и громкий вой сирены или лай собак напугает
						и дезориентирует грабителя. При этом вы получите уведомление о
						попытке несанкционированного проникновения. Умный Дом
						оповестит охранный пульт, вызвав группу реагирования. Сценарий
						«Я ушел». Всего одно нажатие кнопки – и в доме выключатся
						выбранные группы розеток, в комнатах погаснет свет, снизится
						уровень обогрева помещений, активируется система охраны. Дом
						перейдет в спящий режим, экономя ресурсы и ожидая прибытия
						хозяев.
					</Text>
				</Flex>
				<Flex flexDirection='column' gap='16px'>
					<Heading as='h3' textAlign='left'>
						Запись данных на «облако»
					</Heading>
					<Text maxWidth='640px'>
						Беспокоитесь, что видеорегистратор вместе со всеми данными
						может украсть грабитель? Для большей безопасности материалов
						все записи передаются на удаленный сервер по зашифрованному
						каналу.
					</Text>
				</Flex>

				<Flex flexDirection='column' gap='16px'>
					<Heading as='h3' textAlign='left'>
						Просмотр видео с камер <br /> в приложении
					</Heading>
					<Text maxWidth='640px'>
						Камеры, подключенные к системе MiMismart, выводятся напрямую в
						приложение на смартфоне. Вы сможете следить за ребенком,
						играющим во дворе, или сразу же узнать, кто пришел к вам в
						гости, не отрываясь от управления Умным Домом.
					</Text>
				</Flex>
				<Flex className='mt-10 flex-wrap justify-between gap-5 lg:flex-nowrap'>
					{logoData.map((name, idx) => (
						<Image
							key={idx}
							src={`/logo/Desktop/${name.logoName}.png`}
							width={160}
							height={40}
							alt={name.logoName}
						/>
					))}
				</Flex>
			</Center>
		</Box>
	);
};

export default Description;
