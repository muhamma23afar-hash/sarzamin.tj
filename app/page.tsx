'use client';

import { useState } from 'react';
import { regions } from '@/lib/data';
import { Search, Phone } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const translations = {
  tj: {
    welcome: 'ХУШ ОМАДЕД БА ТОҶИКИСТОН',
    search: 'Ҷустуҷӯ...',
    description: 'Маълумотномаи мукаммал оид ба шаҳрҳо ва ноҳияҳои Ҷумҳурии Тоҷикистон. Манбаи боэътимод барои сайёҳон, хонандагон ва шаҳрвандон.',
    tourists: 'Барои сайёҳон', touristsDesc: 'Шиносоӣ бо мавзеъҳои таърихӣ, табиати нотакрор ва маълумотҳои ҷуғрофӣ пеш аз сафар ба минтақаҳои кишвар.',
    students: 'Барои хонандагон', studentsDesc: 'Ёрдамчии беҳтарин дар омӯзиши ҷуғрофия ва таърихи диёр, дастрасӣ ба омори дақиқи аҳолӣ ва масоҳат.',
    citizens: 'Барои шаҳрвандон', citizensDesc: 'Шинохти беҳтари Ватан, фаҳмидани сохтори маъмурӣ ва ифтихор аз гуногунии минтақаҳои Тоҷикистон.',
    name: 'Нам: ',
    area: 'Масоҳати умумӣ',
    population: 'Аҳолӣ (2025-2026)',
    info: 'Маълумоти мухтасар',
    center: 'Маркази маъмурӣ',
    founded: 'Соли таъсис',
    regions: {
      sughd: { name: 'Вилояти Суғд', desc: 'Маркази саноатии кишвар.' },
      khatlon: { name: 'Вилояти Хатлон', desc: 'Минтақаи кишоварзӣ ва саноатӣ.' },
      gbao: { name: 'ВМКБ', desc: 'Минтақаи баландкӯҳи Помир.' },
      rrs: { name: 'НТҶ', desc: 'Ноҳияҳои тобеи ҷумҳурӣ.' },
      dushanbe: { name: 'Шаҳри Душанбе', desc: 'Пойтахти Тоҷикистон.' }
    }
  },
  ru: {
    welcome: 'ДОБРО ПОЖАЛОВАТЬ В ТАДЖИКИСТАН',
    search: 'Поиск...',
    description: 'Полный справочник по городам и районам Республики Таджикистан. Надежный источник для туристов, студентов и граждан.',
    tourists: 'Для туристов', touristsDesc: 'Знакомство с историческими местами, уникальной природой и географической информацией перед поездкой в регионы страны.',
    students: 'Для студентов', studentsDesc: 'Лучший помощник в изучении географии и истории родного края, доступ к точной статистике населения и площади.',
    citizens: 'Для граждан', citizensDesc: 'Лучшее понимание Родины, знание административной структуры и гордость за разнообразие регионов Таджикистана.',
    name: 'Имя: ',
    area: 'Общая площадь',
    population: 'Население (2025-2026)',
    info: 'Краткая информация',
    center: 'Административный центр',
    founded: 'Год основания',
    regions: {
      sughd: { name: 'Согдийская область', desc: 'Промышленный центр страны.' },
      khatlon: { name: 'Хатлонская область', desc: 'Сельскохозяйственный и промышленный регион.' },
      gbao: { name: 'ГБАО', desc: 'Горно-бадахшанский регион.' },
      rrs: { name: 'РРП', desc: 'Районы республиканского подчинения.' },
      dushanbe: { name: 'Город Душанбе', desc: 'Столица Таджикистана.' }
    }
  },
  en: {
    welcome: 'WELCOME TO TAJIKISTAN',
    search: 'Search...',
    description: 'A comprehensive guide to the cities and districts of the Republic of Tajikistan. A trusted source for tourists, students, and citizens.',
    tourists: 'For tourists', touristsDesc: 'Explore historical sites, unique nature, and geographical information before traveling to the regions of the country.',
    students: 'For students', studentsDesc: 'The best assistant in studying geography and history of the region, access to accurate population and area statistics.',
    citizens: 'For citizens', citizensDesc: 'Better understanding of the Motherland, knowledge of administrative structure and pride in the diversity of Tajikistan regions.',
    name: 'Name: ',
    area: 'Total area',
    population: 'Population (2025-2026)',
    info: 'Brief information',
    center: 'Administrative center',
    founded: 'Year of foundation',
    regions: {
      sughd: { name: 'Sughd Region', desc: 'Industrial center of the country.' },
      khatlon: { name: 'Khatlon Region', desc: 'Agricultural and industrial region.' },
      gbao: { name: 'GBAO', desc: 'Gorno-Badakhshan region.' },
      rrs: { name: 'DRD', desc: 'Districts of Republican Subordination.' },
      dushanbe: { name: 'Dushanbe City', desc: 'Capital of Tajikistan.' }
    }
  }
};

const getRegionDisplayName = (id: string, lang: 'tj' | 'ru' | 'en') => {
  const names: Record<string, Record<string, string>> = {
    sughd: { tj: 'Вилояти Суғд', ru: 'Согдийская область', en: 'Sughd Region' },
    khatlon: { tj: 'Вилояти Хатлон', ru: 'Хатлонская область', en: 'Khatlon Region' },
    gbao: { tj: 'ВМКБ', ru: 'ГБАО', en: 'GBAO' },
    rrs: { tj: 'НТҶ', ru: 'РРП', en: 'DRD' },
    dushanbe: { tj: 'Шаҳри Душанбе', ru: 'Город Душанбе', en: 'Dushanbe City' },
  };
  return names[id] ? names[id][lang] : id;
};

const translateDistrictName = (name: string, lang: 'tj' | 'ru' | 'en') => {
  if (name.startsWith('Шаҳри ')) {
    const cityName = name.replace('Шаҳри ', '');
    return lang === 'tj' ? `Шаҳри ${cityName}` : lang === 'ru' ? `Город ${cityName}` : `City of ${cityName}`;
  }
  if (name.startsWith('Ноҳияи ')) {
    const districtName = name.replace('Ноҳияи ', '');
    return lang === 'tj' ? `Ноҳияи ${districtName}` : lang === 'ru' ? `Район ${districtName}` : `District of ${districtName}`;
  }
  return name;
};

export default function Home() {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [lang, setLang] = useState<'tj' | 'ru' | 'en'>('tj');

  const selectedRegion = selectedRegionId ? regions.find(r => r.id === selectedRegionId) : null;
  const selectedDistrict = selectedDistrictId && selectedRegion ? selectedRegion.districts.find(d => d.id === selectedDistrictId) : null;

  const filteredDistricts = selectedRegion ? selectedRegion.districts.filter(district =>
    district.name[lang].toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <main className="h-screen flex bg-slate-50 text-slate-900 overflow-hidden font-sans">
      {/* Left Sidebar - Navigation */}
      <nav className="w-64 border-r border-slate-200 bg-white flex flex-col py-8 px-4 gap-8 shrink-0 shadow-[2px_0_10px_rgba(0,0,0,0.02)] z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl tracking-tight text-emerald-600 cursor-pointer px-2 flex items-center gap-2"
          onClick={() => { setSelectedRegionId(null); setSelectedDistrictId(null); }}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500/20 bg-white flex items-center justify-center">
            <img 
              src="https://i.pinimg.com/736x/dd/6b/61/dd6b61b8acc328fe2524d148e548c11e.jpg" 
              alt="" 
              className="w-full h-full object-cover scale-[1.5] object-[50%_25%]"
              referrerPolicy="no-referrer"
            />
          </div>
          SARZAMIN
        </motion.div>
        
        {/* Language Switcher */}
        <div className="flex gap-2 px-2">
            {(['tj', 'ru', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${lang === l ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                    {l}
                </button>
            ))}
        </div>

        <div className="flex flex-col">
          {regions.map((region, index) => (
            <motion.div 
              key={region.id} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col"
            >
              <button
                onClick={() => {
                  setSelectedRegionId(region.id);
                  setSelectedDistrictId(region.districts[0].id);
                }}
                className={`w-full px-4 py-3 rounded-xl flex items-center font-medium transition-all ${
                  selectedRegionId === region.id 
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' 
                    : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {region.name[lang]}
              </button>
              {index < regions.length - 1 && (
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.5)] my-3 opacity-30" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-auto px-4 py-4 flex items-center gap-2 text-slate-400 text-xs">
          <Phone className="w-3 h-3" />
          <span>+992 907 57 52 28</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10 relative h-12">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={selectedRegionId || 'home'}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-xl font-bold tracking-tight text-slate-300 pointer-events-none"
              >
                {selectedRegion ? selectedRegion.name[lang] : ''}
              </motion.h1>
            </AnimatePresence>
            {selectedRegion && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder={translations[lang].search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border border-slate-200 rounded-full py-2.5 pl-11 pr-4 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition-all text-slate-800"
                />
                <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
              </motion.div>
            )}
        </header>

        <AnimatePresence mode="wait">
        {!selectedRegion ? (
          <motion.div 
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col w-full h-full"
          >
             
             <div className="flex flex-row items-stretch gap-8 w-full h-full py-2">
            {/* Left/Center Content Area */}
            <div className="flex-[2] flex flex-col items-center justify-start text-center pt-4 pb-20 relative">
              {/* Quote Box */}
              <div className="w-full max-w-4xl mx-auto px-8 mb-6">
                <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-4">
                    <div className="text-emerald-500 text-3xl font-serif">"</div>
                    <p className="text-sm md:text-base italic text-slate-700 font-medium leading-relaxed">
                      Ватан – ин гаҳвораи ҳаёт, макони муқаддас ва асоси ҳастии ҳар як инсон аст.
                    </p>
                </div>
              </div>

              {/* Background globe image */}
              <div 
                className="absolute inset-0 z-0 opacity-20 pointer-events-none scale-[1.4]"
                style={{
                  backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tajikistan_on_the_globe_%28Eurasia_centered%29.svg/960px-Tajikistan_on_the_globe_%28Eurasia_centered%29.svg.png")',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              <motion.h1 className="text-4xl font-bold mb-4 text-emerald-900 relative z-10">
                {translations[lang].welcome}
              </motion.h1>
              <motion.p className="text-slate-600 mb-8 max-w-lg relative z-10">
                {translations[lang].description}
              </motion.p>
              
              {/* Statistic Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl z-10 mb-10">
                {[
                  { label: "Шаҳру ноҳияҳо", value: "68" },
                  { label: "Аҳолӣ", value: "10 000 000+" },
                  { label: "Масоҳат", value: "143,100 км²" },
                  { label: "Минтақаҳо", value: "5" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                    <div className="text-emerald-600 font-bold text-lg">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Icons Marquee */}
              <div className="relative z-10 w-full overflow-hidden shrink-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 max-w-[700px] mx-auto min-h-[160px] mt-auto">
                <motion.div 
                  className="flex w-max items-center h-full"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                >
                  {[1, 2].map((set) => (
                    <div key={set} className="flex shrink-0">
                      {[ 
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emblem_of_Tajikistan_%282%29.svg/960px-Emblem_of_Tajikistan_%282%29.svg.png",
                        "https://i.pinimg.com/736x/dd/6b/61/dd6b61b8acc328fe2524d148e548c11e.jpg",
                        "https://i.pinimg.com/736x/33/39/2f/33392f4cb27768233cc1c2a897b93085.jpg",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emblem_of_Tajikistan_%282%29.svg/960px-Emblem_of_Tajikistan_%282%29.svg.png",
                        "https://i.pinimg.com/736x/dd/6b/61/dd6b61b8acc328fe2524d148e548c11e.jpg",
                        "https://i.pinimg.com/736x/33/39/2f/33392f4cb27768233cc1c2a897b93085.jpg"
                      ].map((src, i) => (
                        <div key={i} className="px-4 shrink-0">
                          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white flex items-center justify-center">
                            <img 
                              src={src} 
                              alt="" 
                              className={`w-full h-full ${
                                src.includes('Emblem') ? 'object-contain p-4' : 
                                src.includes('dd/6b/61') ? 'object-cover scale-[1.5]' : 
                                'object-contain p-2'
                              }`} 
                              referrerPolicy="no-referrer" 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="flex-[1.5] rounded-3xl overflow-hidden relative shadow-lg -mt-8 mb-8">
               <Image 
                src="https://st4.depositphotos.com/16115532/23882/i/450/depositphotos_238826208-stock-photo-fan-mountain-river-stone-hut.jpg"
                alt="Tajikistan Landscape"
                fill
                className="object-cover brightness-90 opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          </motion.div>
        ) : (
          <motion.div 
            key="region-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="mb-12">
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
                {translations[lang].regions[selectedRegion.id as keyof typeof translations['tj']['regions']]?.name}
              </h2>
              <p className="text-slate-600 max-w-3xl text-lg leading-relaxed">
                {translations[lang].regions[selectedRegion.id as keyof typeof translations['tj']['regions']]?.desc}
              </p>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredDistricts.map((district) => (
                <motion.button
                  layout
                  key={district.id}
                  onClick={() => setSelectedDistrictId(district.id)}
                  className={`min-h-[140px] p-6 rounded-3xl border transition-all duration-300 text-left relative overflow-hidden group flex flex-col justify-end ${
                    selectedDistrictId === district.id
                      ? 'border-emerald-500 shadow-[0_4px_20px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500'
                      : 'border-transparent shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div 
                    className="absolute inset-0 z-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${district.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10 transition-opacity" />
                  
                  <div className="relative z-20 mt-auto pt-12">
                    <h3 className="font-bold text-white text-xl mb-1 drop-shadow-md">{translateDistrictName(district.name[lang], lang)}</h3>
                    <p className="text-sm text-slate-200 capitalize drop-shadow-sm line-clamp-2">{district.description[lang]}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </section>

      {/* Right Information Panel */}
      {selectedDistrict && selectedRegion && (
        <aside className="w-[420px] border-l border-slate-200 p-10 bg-white shrink-0 shadow-[-4px_0_20px_rgba(0,0,0,0.02)] z-10 overflow-y-auto">
          <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-8">
            {lang === 'tj' ? 'Географияи ' : lang === 'ru' ? 'География ' : 'Geography of '}
            {selectedDistrict.name[lang].replace('Шаҳри ', '').replace('Ноҳияи ', '')}
          </h4>
          
          <div className="mb-8 p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-sm">
              <div className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">{selectedDistrict.area}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{translations[lang].area}</div>
          </div>

          <div className="mb-12 p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 transition-all hover:bg-emerald-50">
              <div className="text-4xl font-bold mb-3 text-emerald-600 tracking-tight">{selectedDistrict.population}</div>
              <div className="text-sm font-medium text-emerald-800/60 uppercase tracking-wider">{translations[lang].population}</div>
          </div>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{translations[lang].info}</h4>
          <div className="space-y-6">
            <p className="text-base text-slate-700 leading-relaxed border-l-4 border-emerald-500/30 pl-5">
              {selectedDistrict.description[lang]}
            </p>
            <ul className="space-y-4 mt-8 text-sm text-slate-600 bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <li className="flex justify-between items-center py-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">{translations[lang].center}</span> 
                <span className="font-bold text-slate-900 text-right">{selectedDistrict.center}</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-slate-500 font-medium">{translations[lang].founded}</span> 
                <span className="font-bold text-slate-900">{selectedDistrict.founded}</span>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </main>
  );
}
