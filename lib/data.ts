
export interface LocalizedString {
  tj: string;
  ru: string;
  en: string;
}

export interface District {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  center?: string;
  area?: string;
  population?: string;
  founded?: string;
}

export interface Region {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  districts: District[];
}

export const regions: Region[] = [
  {
    id: 'sughd',
    name: { tj: 'Вилояти Суғд', ru: 'Согдийская область', en: 'Sughd Region' },
    description: { tj: 'Маркази саноатии кишвар.', ru: 'Промышленный центр страны.', en: 'Industrial center of the country.' },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s',
    districts: [
      { id: 'khujand', name: { tj: 'Шаҳри Хуҷанд', ru: 'Город Худжанд', en: 'City of Khujand' }, description: { tj: 'Маркази маъмурии вилоят.', ru: 'Административный центр области.', en: 'Administrative center of the region.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Хуҷанд', area: '40 км²', population: '+205,800', founded: 'Асри VII то мелод' },
      { id: 'istravshan', name: { tj: 'Шаҳри Истаравшан', ru: 'Город Истаравшан', en: 'City of Istaravshan' }, description: { tj: 'Шаҳри қадима.', ru: 'Древний город.', en: 'Ancient city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Истаравшан', area: '1,830 км²', population: '+286,400', founded: 'Асри VI то мелод / Ноҳия 1926' },
      { id: 'isfara', name: { tj: 'Шаҳри Исфара', ru: 'Город Исфара', en: 'City of Isfara' }, description: { tj: 'Шаҳри боғу гул.', ru: 'Город садов.', en: 'City of gardens.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Исфара', area: '832 км²', population: '+290,100', founded: 'Асри Х / Ноҳия 1927' },
      { id: 'konibodom', name: { tj: 'Шаҳри Конибодом', ru: 'Город Канибадам', en: 'City of Konibodom' }, description: { tj: 'Шаҳри қадима.', ru: 'Древний город.', en: 'Ancient city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Конибодом', area: '828.9 км²', population: '+223,500', founded: 'Асри IX / Ноҳия 1926' },
      { id: 'panjakent', name: { tj: 'Шаҳри Панҷакент', ru: 'Город Пенджикент', en: 'City of Panjakent' }, description: { tj: 'Шаҳри таърихӣ.', ru: 'Исторический город.', en: 'Historical city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Панҷакент', area: '3,168 км²', population: '+315,600', founded: 'Асри V / Ноҳия 1930' },
      { id: 'buston', name: { tj: 'Шаҳри Бӯстон', ru: 'Город Бустон', en: 'City of Buston' }, description: { tj: 'Шаҳри саноатӣ.', ru: 'Промышленный город.', en: 'Industrial city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Бӯстон', area: '20 км²', population: '+38,400', founded: '1952 (мақоми шаҳр 1956)' },
      { id: 'guliston', name: { tj: 'Шаҳри Гулистон', ru: 'Город Гулистон', en: 'City of Guliston' }, description: { tj: 'Шаҳри назди обанбор.', ru: 'Город у водохранилища.', en: 'City by the reservoir.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Гулистон', area: '500 км²', population: '+57,200', founded: '1963' },
      { id: 'istiqlol', name: { tj: 'Шаҳри Истиқлол', ru: 'Город Истиклол', en: 'City of Istiqlol' }, description: { tj: 'Шаҳри маъданшиносон.', ru: 'Город горняков.', en: 'City of miners.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Истиқлол', area: '18 км²', population: '+19,300', founded: '1937' },
      { id: 'ayni', name: { tj: 'Ноҳияи Айнӣ', ru: 'Район Айни', en: 'Ayni District' }, description: { tj: 'Водии Зарафшон.', ru: 'Зеравшанская долина.', en: 'Zeravshan valley.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Айнӣ', area: '5,158 км²', population: '+96,800', founded: '23 ноябри 1930' },
      { id: 'asht', name: { tj: 'Ноҳияи Ашт', ru: 'Район Ашт', en: 'Asht District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Ашт', area: '2,785 км²', population: '+187,000', founded: '28 сентябри 1926' },
      { id: 'bobojon', name: { tj: 'Ноҳияи Б. Ғафуров', ru: 'Район Б. Гафурова', en: 'B. Gafurov District' }, description: { tj: 'Ноҳияи саноатӣ.', ru: 'Промышленный район.', en: 'Industrial district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Ғафуров', area: '2,651 км²', population: '+408,500', founded: '31 январи 1932' },
      { id: 'devashtich', name: { tj: 'Ноҳияи Деваштич', ru: 'Район Деваштич', en: 'Devashtich District' }, description: { tj: 'Ноҳияи куҳӣ.', ru: 'Горный район.', en: 'Mountainous district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Ғончӣ', area: '1,588 км²', population: '+189,200', founded: '5 декабри 1929' },
      { id: 'zafarobod', name: { tj: 'Ноҳияи Зафаробод', ru: 'Район Зафарабад', en: 'Zafarobod District' }, description: { tj: 'Ноҳияи пахтакор.', ru: 'Хлопководческий район.', en: 'Cotton-growing district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Зафаробод', area: '441 км²', population: '+85,600', founded: '20 декабри 1960' },
      { id: 'kuhistoni', name: { tj: 'Ноҳияи К. Мастчоҳ', ru: 'Район Кухистони Мастчох', en: 'Kuhistoni Mastchoh District' }, description: { tj: 'Ноҳияи баландкӯҳ.', ru: 'Высокогорный район.', en: 'High-mountainous district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Марзи', area: '3,723 км²', population: '+28,200', founded: '18 ноябри 1996' },
      { id: 'mastchoh', name: { tj: 'Ноҳияи Мастчоҳ', ru: 'Район Мастчох', en: 'Mastchoh District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Бӯстон', area: '1,000 км²', population: '+136,100', founded: '29 декабри 1930 / 1956' },
      { id: 'spitamen', name: { tj: 'Ноҳияи Спитамен', ru: 'Район Спитамен', en: 'Spitamen District' }, description: { tj: 'Ноҳияи қадима.', ru: 'Древний район.', en: 'Ancient district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Навкат', area: '496.6 км²', population: '+156,200', founded: '29 сентябри 1933' },
      { id: 'shahriston', name: { tj: 'Ноҳияи Шаҳристон', ru: 'Район Шахристан', en: 'Shahriston District' }, description: { tj: 'Шаҳри таърихӣ.', ru: 'Исторический район.', en: 'Historical district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Шаҳристон', area: '1,140 км²', population: '+48,500', founded: '29 августи 1990' },
      { id: 'jabbor', name: { tj: 'Ноҳияи Ҷ. Расулов', ru: 'Район Дж. Расулова', en: 'J. Rasulov District' }, description: { tj: 'Ноҳияи саноатӣ.', ru: 'Промышленный район.', en: 'Industrial district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wJaDZphwpTr1xXRKAkYBasfUhpoeZtw8Q&s', center: 'Меҳробод', area: '328.5 км²', population: '+149,000', founded: '21 январи 1935' }
    ]
  },
  {
    id: 'khatlon',
    name: { tj: 'Вилояти Хатлон', ru: 'Хатлонская область', en: 'Khatlon Region' },
    description: { tj: 'Минтақаи кишоварзӣ ва саноатӣ.', ru: 'Сельскохозяйственный и промышленный регион.', en: 'Agricultural and industrial region.' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png',
    districts: [
      { id: 'bokhtar', name: { tj: 'Шаҳри Бохтар', ru: 'Город Бохтар', en: 'City of Bokhtar' }, description: { tj: `Маркази вилоят.Бохтар (собиқ Қӯрғонтеппа) яке аз шаҳрҳои калонтарин ва муҳимтарини Тоҷикистон буда, маркази маъмурии вилояти Хатлон ба ҳисоб меравад. Ин шаҳр дар ҷануби кишвар, дар водии сероби дарёи Вахш воқеъ шудааст.

Дар зер маълумоти муҳим ва ҷолиб дар бораи шаҳри Бохтар оварда шудааст:

1. Ҷуғрофия ва Аҳолӣ
Мавқеъ: Шаҳр дар масофаи тақрибан 100 километрии ҷануби шаҳри Душанбе ҷойгир аст.

Аҳолӣ: Аҳолии шаҳр зиёда аз 132,500 нафарро ташкил медиҳад (ва бо атрофаш боз ҳам бештар аст). Он сеюмин шаҳри калонтарини Тоҷикистон аз назари аҳолӣ мебошад.

Иқлим: Иқлими Бохтар континенталӣ ва гарм аст. Тобистони он хеле гарм ва хушк буда, зимистонаш муътадил ва кӯтоҳ аст. Ин иқлим барои соҳаи кишоварзӣ, махсусан пахтакорӣ ва парвариши лимӯ, хеле мусоид аст.

2. Таърих ва Номгузорӣ
Қӯрғонтеппа: Дар давоми асрҳо ва то соли 2018 ин шаҳр расман Қӯрғонтеппа ном дошт. Ин ном аз ду калима: "Қӯрғон" (қалъа) ва "Теппа" гирифта шуда, ба теппаи таърихии маркази шаҳр ишорат мекунад.

Бохтар: Соли 2018 бо қарори Ҳукумати ҷумҳурӣ номи шаҳр ба Бохтар табдил дода шуд. Ин ном ба хотири зинда кардани номи давлату тамаддуни қадимаи аҷдодони тоҷикон — Бохтар (Балх) гузошта шудааст.

3. Иқтисодиёт ва Саноат
Бохтар маркази иқтисодии вилояти Хатлон аст:

Саноати бофандагӣ (коркарди пахта ва истеҳсоли ресмон), корхонаҳои хӯрокворӣ ва коркарди маҳсулоти кишоварзӣ дар ин ҷо хеле инкишоф ёфтаанд.

Водии Вахш, ки Бохтар дар маркази он аст, бо "тиллои сафед" (пахтаи маҳиннах) ва боғҳои лимӯву анор дар тамоми кишвар машҳур аст.

4. Нақлиёт ва Инфрасохтор
Шаҳр дорои Фурӯдгоҳи байналмилалии Бохтар мебошад.

Инчунин, хати роҳи оҳан шаҳрро бо Душанбе ва дигар минтақаҳои ҷанубиву берун аз кишвар пайваст мекунад.

5. Ҷойҳои таърихӣ ва сайёҳӣ
Қалъаи Қӯрғонтеппа (Теппаи марказӣ): Дар маркази шаҳр як теппаи калони таърихӣ мавҷуд аст, ки дар болои он осорхонаи "Бибихонум" ва бурҷи дидбонии рамзии шаҳр сохта шудаанд.

Аҷинатеппа (дар наздикии шаҳр): Яке аз муҳимтарин ёдгориҳои таърихии Тоҷикистон. Маҳз аз ҳамин ҷо соли 1966 муҷассамаи бузурги лоинии "Буддо дар нирвана" (дарозиаш тақрибан 13 метр) ёфт шуда буд, ки ҳоло нусхаи аслии он дар Осорхонаи миллии бостонии Тоҷикистон дар Душанбе маҳфуз аст.

Оромгоҳи ҳазрати Амир Султони Кабир: Зиёратгоҳ ва ҷои таърихие, ки сайёҳон ва сокинони маҳаллӣ ба он ҷо мераванд.

Бохтар шаҳри ҷавон, сабз ва хеле меҳмоннавоз аст, ки бо боғҳои зебо ва кӯчаҳои васеи худ фарқ мекунад.`, ru: 'Административный центр области.', en: 'Administrative center of the region.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Бохтар', area: '26 км²', population: '+132,500', founded: '1932' },
      { id: 'kulob', name: { tj: 'Шаҳри Кӯлоб', ru: 'Город Куляб', en: 'City of Kulob' }, description: { tj: 'Шаҳри таърихӣ.', ru: 'Древний город.', en: 'Ancient city.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Кӯлоб', area: '35 км²', population: '+231,200', founded: 'Асри XIII' },
      { id: 'nurek', name: { tj: 'Шаҳри Норак', ru: 'Город Нурек', en: 'City of Nurek' }, description: { tj: 'Шаҳри энергетикҳо.', ru: 'Город энергетиков.', en: 'City of energy workers.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Норак', area: '395 км²', population: '+34,500', founded: '1960' },
      { id: 'levakant', name: { tj: 'Шаҳри Левакант', ru: 'Город Левакант', en: 'City of Levakant' }, description: { tj: 'Шаҳри саноатӣ.', ru: 'Промышленный город.', en: 'Industrial city.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Левакант', area: '130 км²', population: '+20,100', founded: '1956' },
      { id: 'baljuvon', name: { tj: 'Ноҳияи Балҷувон', ru: 'Район Бальджуван', en: 'Baljuvon District' }, description: { tj: 'Минтақаи сайёҳӣ.', ru: 'Туристический район.', en: 'Tourist region.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Балҷувон', area: '1,326 км²', population: '+32,300', founded: '2001' },
      { id: 'kushoniyon', name: { tj: 'Ноҳияи Кӯшониён', ru: 'Район Кушониён', en: 'Kushoniyon District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Исмоили Сомонӣ', area: '600 км²', population: '+290,000', founded: '1930' },
      { id: 'vakhsh', name: { tj: 'Ноҳияи Вахш', ru: 'Район Вахш', en: 'Vakhsh District' }, description: { tj: 'Водии зархез.', ru: 'Плодородная долина.', en: 'Fertile valley.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Вахш', area: '965 км²', population: '+205,000', founded: '1932' },
      { id: 'vose', name: { tj: 'Ноҳияи Восеъ', ru: 'Район Восе', en: 'Vose District' }, description: { tj: 'Ноҳияи деҳқонӣ.', ru: 'Дехканский район.', en: 'Farming district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Ҳулбук', area: '800 км²', population: '+220,000', founded: '1936' },
      { id: 'danghara', name: { tj: 'Ноҳияи Данғара', ru: 'Район Дангара', en: 'Danghara District' }, description: { tj: 'Ноҳияи саноатӣ-аграрӣ.', ru: 'Промышленно-аграрный район.', en: 'Industrial-agrarian district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Данғара', area: '2,010 км²', population: '+170,000', founded: '1932' },
      { id: 'jomi', name: { tj: 'Ноҳияи А. Ҷомӣ', ru: 'Район А. Джоми', en: 'A. Jomi District' }, description: { tj: 'Ноҳияи пахтакор.', ru: 'Хлопководческий район.', en: 'Cotton-growing district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'А. Ҷомӣ', area: '600 км²', population: '+180,000', founded: '1935' },
      { id: 'yovon', name: { tj: 'Ноҳияи Ёвон', ru: 'Район Яван', en: 'Yovon District' }, description: { tj: 'Минтақаи саноатӣ.', ru: 'Промышленный район.', en: 'Industrial region.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Ёвон', area: '900 км²', population: '+230,000', founded: '1934' },
      { id: 'farkhor', name: { tj: 'Ноҳияи Фархор', ru: 'Район Фархор', en: 'Farkhor District' }, description: { tj: 'Ноҳияи сарҳадӣ.', ru: 'Приграничный район.', en: 'Border district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Фархор', area: '1,183 км²', population: '+175,000', founded: '1930' },
      { id: 'muminobod', name: { tj: 'Ноҳияи Мӯъминобод', ru: 'Район Муминабад', en: 'Muminobod District' }, description: { tj: 'Ноҳияи кӯҳсор.', ru: 'Горный район.', en: 'Mountainous district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Мӯъминобод', area: '900 км²', population: '+95,000', founded: '1973' },
      { id: 'panj', name: { tj: 'Ноҳияи Панҷ', ru: 'Район Пяндж', en: 'Panj District' }, description: { tj: 'Ноҳияи сарҳадӣ.', ru: 'Приграничный район.', en: 'Border district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Панҷ', area: '880 км²', population: '+125,000', founded: '1930' },
      { id: 'balkhi', name: { tj: 'Ноҳияи Ҷ. Балхӣ', ru: 'Район Дж. Балхи', en: 'J. Balkhi District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Ҷ. Балхӣ', area: '900 км²', population: '+210,000', founded: '1934' },
      { id: 'qubodiyon', name: { tj: 'Ноҳияи Қубодиён', ru: 'Район Кубодиён', en: 'Qubodiyon District' }, description: { tj: 'Ноҳияи таърихӣ.', ru: 'Исторический район.', en: 'Historical district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Қубодиён', area: '1,834 км²', population: '+190,000', founded: '1930' },
      { id: 'dusti', name: { tj: 'Ноҳияи Дӯстӣ', ru: 'Район Дусти', en: 'Dusti District' }, description: { tj: 'Ноҳияи пахтакор.', ru: 'Хлопководческий район.', en: 'Cotton-growing district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Ҷиликул', area: '1,200 км²', population: '+120,000', founded: '1933' },
      { id: 'jayhun', name: { tj: 'Ноҳияи Ҷайҳун', ru: 'Район Джайхун', en: 'Jayhun District' }, description: { tj: 'Ноҳияи сарҳадӣ.', ru: 'Приграничный район.', en: 'Border district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Дӯстӣ', area: '1,000 км²', population: '+140,000', founded: '1930' },
      { id: 'khuroson', name: { tj: 'Ноҳияи Хуросон', ru: 'Район Хуросон', en: 'Khuroson District' }, description: { tj: 'Ноҳияи боғпарвар.', ru: 'Садоводческий район.', en: 'Horticultural district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Обикиик', area: '900 км²', population: '+125,000', founded: '1936' },
      { id: 'hamadoni', name: { tj: 'Ноҳияи М.С.А. Ҳамадонӣ', ru: 'Район М.С.А. Хамадони', en: 'M.S.A. Hamadoni District' }, description: { tj: 'Ноҳияи сарҳадӣ.', ru: 'Приграничный район.', en: 'Border district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Маскав', area: '500 км²', population: '+150,000', founded: '1950' },
      { id: 'khusrav', name: { tj: 'Ноҳияи Н. Хусрав', ru: 'Район Н. Хусрав', en: 'N. Khusrav District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Баҳор', area: '800 км²', population: '+40,000', founded: '1996' },
      { id: 'shahrtuz', name: { tj: 'Ноҳияи Шаҳритӯс', ru: 'Район Шахритус', en: 'Shahrtuz District' }, description: { tj: 'Ноҳияи таърихӣ.', ru: 'Исторический район.', en: 'Historical district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Шаҳритӯс', area: '1,500 км²', population: '+135,000', founded: '1930' },
      { id: 'temurmalik', name: { tj: 'Ноҳияи Темурмалик', ru: 'Район Темурмалик', en: 'Temurmalik District' }, description: { tj: 'Ноҳияи кӯҳсор.', ru: 'Горный район.', en: 'Mountainous district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Баҳманрӯд', area: '1,000 км²', population: '+75,000', founded: '1929' },
      { id: 'khovaling', name: { tj: 'Ноҳияи Ховалинг', ru: 'Район Ховалинг', en: 'Khovaling District' }, description: { tj: 'Ноҳияи таърихӣ ва сайёҳӣ.', ru: 'Исторический и туристический район.', en: 'Historical and tourist district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Ховалинг', area: '1,700 км²', population: '+60,000', founded: '1930' },
      { id: 'shohin', name: { tj: 'Ноҳияи Ш. Шоҳин', ru: 'Район Ш. Шохин', en: 'Sh. Shohin District' }, description: { tj: 'Ноҳияи сарҳадӣ.', ru: 'Приграничный район.', en: 'Border district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Khatlon_Province_in_Tajikistan.svg/960px-Khatlon_Province_in_Tajikistan.svg.png', center: 'Шӯрообод', area: '2,300 км²', population: '+55,000', founded: '1930' }
    ]
  },
  {
    id: 'gbao',
    name: { tj: 'ВМКБ', ru: 'ГБАО', en: 'GBAO' },
    description: { tj: 'Минтақаи баландкӯҳи Помир.', ru: 'Горно-бадахшанский регион.', en: 'Gorno-Badakhshan region.' },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s',
    districts: [
      { id: 'khorugh', name: { tj: 'Шаҳри Хоруғ', ru: 'Город Хорог', en: 'City of Khorugh' }, description: { tj: 'Маркази маъмурии вилоят.', ru: 'Административный центр области.', en: 'Administrative center of the region.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Хоруғ', area: '11 км²', population: '+32,800', founded: '1932' },
      { id: 'darvoz', name: { tj: 'Ноҳияи Дарвоз', ru: 'Район Дарваз', en: 'Darvoz District' }, description: { tj: 'Дарвозаи Помир.', ru: 'Ворота Памира.', en: 'Gate to Pamir.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Қалъаихумб', area: '2,800 км²', population: '+25,000', founded: '1932' },
      { id: 'vanch', name: { tj: 'Ноҳияи Ванҷ', ru: 'Район Вандж', en: 'Vanch District' }, description: { tj: 'Ноҳияи кӯҳсор.', ru: 'Горный район.', en: 'Mountainous district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Ванҷ', area: '4,400 км²', population: '+35,000', founded: '1932' },
      { id: 'rushon', name: { tj: 'Ноҳияи Рӯшон', ru: 'Район Рушан', en: 'Rushon District' }, description: { tj: 'Минтақаи зебоманзар.', ru: 'Живописный регион.', en: 'Picturesque region.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Рӯшон', area: '5,800 км²', population: '+26,000', founded: '1932' },
      { id: 'shughnon', name: { tj: 'Ноҳияи Шуғнон', ru: 'Район Шугнан', en: 'Shughnon District' }, description: { tj: 'Ноҳияи калонтарин аҳолӣ.', ru: 'Район с наибольшим населением.', en: 'District with the largest population.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Ривак', area: '4,600 км²', population: '+40,000', founded: '1932' },
      { id: 'roshtqala', name: { tj: 'Ноҳияи Роштқалъа', ru: 'Район Рошткала', en: 'Roshtqala District' }, description: { tj: 'Ноҳияи баландкӯҳ.', ru: 'Высокогорный район.', en: 'High-mountainous district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Роштқалъа', area: '4,300 км²', population: '+28,000', founded: '1992' },
      { id: 'ishkoshim', name: { tj: 'Ноҳияи Ишкошим', ru: 'Район Ишкашим', en: 'Ishkoshim District' }, description: { tj: 'Минтақаи таърихӣ.', ru: 'Исторический регион.', en: 'Historical region.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Ишкошим', area: '3,656 км²', population: '+33,000', founded: '1932' },
      { id: 'murghob', name: { tj: 'Ноҳияи Мурғоб', ru: 'Район Мургаб', en: 'Murghob District' }, description: { tj: 'Боми Ҷаҳон.', ru: 'Крыша мира.', en: 'Roof of the World.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-OhUaHV7OBBqRqH0LgQWJL5XiHMjh9rJ1Q&s', center: 'Мурғоб', area: '38,442 км²', population: '+16,000', founded: '1932' }
    ]
  },
  {
    id: 'rrs',
    name: { tj: 'НТҶ', ru: 'РРП', en: 'DRD' },
    description: { tj: 'Ноҳияҳои тобеи ҷумҳурӣ.', ru: 'Районы республиканского подчинения.', en: 'Districts of Republican Subordination.' },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s',
    districts: [
      { id: 'vahdat', name: { tj: 'Шаҳри Ваҳдат', ru: 'Город Вахдат', en: 'City of Vahdat' }, description: { tj: 'Шаҳри саноатӣ.', ru: 'Промышленный город.', en: 'Industrial city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Ваҳдат', area: '3,675 км²', population: '+366,400', founded: '1927' },
      { id: 'hisor', name: { tj: 'Шаҳри Ҳисор', ru: 'Город Гиссар', en: 'City of Hisor' }, description: { tj: 'Шаҳри таърихӣ.', ru: 'Исторический город.', en: 'Historical city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Ҳисор', area: '1,982 км²', population: '+340,000', founded: '1932' },
      { id: 'tursunzoda', name: { tj: 'Шаҳри Турсунзода', ru: 'Город Турсунзаде', en: 'City of Tursunzoda' }, description: { tj: 'Шаҳри саноатӣ.', ru: 'Промышленный город.', en: 'Industrial city.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Турсунзода', area: '1,175 км²', population: '+320,000', founded: '1935' },
      { id: 'roghun', name: { tj: 'Шаҳри Роғун', ru: 'Город Рогун', en: 'City of Roghun' }, description: { tj: 'Шаҳри энергетикҳо.', ru: 'Город энергетиков.', en: 'City of energy workers.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Роғун', area: '661 км²', population: '+45,000', founded: '1959' },
      { id: 'varzob', name: { tj: 'Ноҳияи Варзоб', ru: 'Район Варзоб', en: 'Varzob District' }, description: { tj: 'Минтақаи дамгирӣ.', ru: 'Зона отдыха.', en: 'Recreation area.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Варзоб', area: '1,700 км²', population: '+90,000', founded: '1939' },
      { id: 'nurobod', name: { tj: 'Ноҳияи Нуробод', ru: 'Район Нуробод', en: 'Nurobod District' }, description: { tj: 'Ноҳияи кӯҳӣ.', ru: 'Горный район.', en: 'Mountainous district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Дарбанд', area: '900 км²', population: '+85,000', founded: '1936' },
      { id: 'rasht', name: { tj: 'Ноҳияи Рашт', ru: 'Район Рашт', en: 'Rasht District' }, description: { tj: 'Маркази водӣ.', ru: 'Центр долины.', en: 'Center of the valley.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Ғарм', area: '4,600 км²', population: '+135,000', founded: '1931' },
      { id: 'sangvor', name: { tj: 'Ноҳияи Сангвор', ru: 'Район Сангвор', en: 'Sangvor District' }, description: { tj: 'Ноҳияи кӯҳӣ.', ru: 'Горный район.', en: 'Mountainous district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Тавилдара', area: '6,000 км²', population: '+25,000', founded: '1931' },
      { id: 'tojikobod', name: { tj: 'Ноҳияи Тоҷикобод', ru: 'Район Таджикабад', en: 'Tojikobod District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Тоҷикобод', area: '700 км²', population: '+50,000', founded: '1936' },
      { id: 'lakhsh', name: { tj: 'Ноҳияи Лахш', ru: 'Район Лахш', en: 'Lakhsh District' }, description: { tj: 'Минтақаи баландкӯҳ.', ru: 'Высокогорный регион.', en: 'High-mountainous region.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Ваҳдат', area: '4,600 км²', population: '+70,000', founded: '1931' },
      { id: 'fayzobod', name: { tj: 'Ноҳияи Файзобод', ru: 'Район Файзабад', en: 'Fayzobod District' }, description: { tj: 'Ноҳияи боғот.', ru: 'Район садов.', en: 'Orchard district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Файзобод', area: '874 км²', population: '+115,000', founded: '1931' },
      { id: 'rudaki', name: { tj: 'Ноҳияи Рӯдакӣ', ru: 'Район Рудаки', en: 'Rudaki District' }, description: { tj: 'Ноҳияи кишоварзӣ.', ru: 'Сельскохозяйственный район.', en: 'Agricultural district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Сомониён', area: '1,800 км²', population: '+630,000', founded: '1927' },
      { id: 'shahrinav', name: { tj: 'Ноҳияи Шаҳринав', ru: 'Район Шахринав', en: 'Shahrinav District' }, description: { tj: 'Ноҳияи аграрӣ.', ru: 'Аграрный район.', en: 'Agrarian district.' }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JAcQq3AdlNTshawVnrrbwkj97P0jbbcxYw&s', center: 'Шаҳринав', area: '1,000 км²', population: '+135,000', founded: '1927' }
    ]
  },
  {
    id: 'dushanbe',
    name: { tj: 'Шаҳри Душанбе', ru: 'Город Душанбе', en: 'Dushanbe City' },
    description: { tj: 'Пойтахти Тоҷикистон.', ru: 'Столица Таджикистана.', en: 'Capital of Tajikistan.' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5.png',
    districts: [
      { id: 'ismoili-somoni', name: { tj: 'Ноҳияи Исмоили Сомонӣ', ru: 'Район Исмоили Сомони', en: 'Ismoili Somoni District' }, description: { tj: 'Маркази маъмурӣ.', ru: 'Административный центр.', en: 'Administrative center.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5.png', center: 'Душанбе', area: '25.8 км²', population: '+150,000', founded: '1924' },
      { id: 'sino', name: { tj: 'Ноҳияи Сино', ru: 'Район Сино', en: 'Sino District' }, description: { tj: 'Ноҳияи сераҳолӣ.', ru: 'Самый густонаселенный район.', en: 'Most populous district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5.png', center: 'Душанбе', area: '43.8 км²', population: '+330,000', founded: '1969' },
      { id: 'firdavsi', name: { tj: 'Ноҳияи Фирдавсӣ', ru: 'Район Фирдавси', en: 'Firdavsi District' }, description: { tj: 'Ноҳияи саноатӣ.', ru: 'Промышленный район.', en: 'Industrial district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5.png', center: 'Душанбе', area: '29.1 км²', population: '+175,000', founded: '1981' },
      { id: 'shohmansur', name: { tj: 'Ноҳияи Шоҳмансур', ru: 'Район Шохмансур', en: 'Shohmansur District' }, description: { tj: 'Ноҳияи таърихӣ ва саноатӣ.', ru: 'Исторический и промышленный район.', en: 'Historical and industrial district.' }, image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5.png', center: 'Душанбе', area: '27.9 км²', population: '+165,000', founded: '1924' }
    ]
  }
];
