import React from 'react'
import skyl from "./assets/ckyl.png"
import car_logo from "./assets/car_logo.png"
import car_logos from "./assets/car_logos.png"
import book from "./assets/book.png"
import map from "./assets/map.png"
import carImg from "./assets/carimg.png"
import water from "./assets/water.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import video_1 from "./assets/video_1.png"
import video_2 from "./assets/video_2.png"
import video_3 from "./assets/video_3.png"
import video_4 from "./assets/video_4.png"
import mask from "./assets/mask.png"
import img__1 from "./assets/img__1.png"
import img__2 from "./assets/img__2.png"
import img__3 from "./assets/img__3.png"
import img__4 from "./assets/img__4.png"
import img__5 from "./assets/img__5.png"
import img___3 from "./assets/img___3.png"
import diriveing from "./assets/driving.png"
import map__ from "./assets/mapppp.png"
import car_logo2 from "./assets/car_logo2.png"

const Hamidulloh = () => {
  return (

    <div>
      <header>
       <nav className='flex items-center'>
                       <img src={skyl} alt="" />
                       <h1 className='ml-35 text-black'>+7 994 0000 266</h1>
                       <ul className='flex gap-10 ml-20 text-gray-600'>
                           <li>Категория B</li>
                           <li>Цена</li>
                           <li>Контакты</li>
                           <li>Записаться</li>
                           <li>Документы</li>
                       </ul>
                       <p className='ml-20 text-gray-600'>Лицензия</p>
                   </nav>
        <div
          className="w-full h-[300] flex items-center bg-cover bg-center mt-20 absolute" >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 w-full">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Мы выпустили
                <span className="text-blue-500"> 9000+ </span>
                водителей
                <br />
                Ты следующий!
              </h1>
              <ul className="mt-6 space-y-2 text-white" >
                <li>Профессионально обучаем вождению</li>
                <li>Удобный график занятий</li>
                <li>Адекватные цены</li>
                <li>Филиалы в удобной части города</li>
              </ul>
              <div className="mt-6 flex items-center gap-4">

                <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
                  НАЧАТЬ ОБУЧЕНИЕ
                </button>
                <p className="text-white cursor-pointer">
                  Подробнее
                </p>
              </div>
            </div>
            <div >
              <img src={car_logo} alt="" className='w-[545px] h-[470px] ml-20' />
            </div>
          </div>
        </div>
        <div >
          <img src={car_logos} alt="" className=' mt-75' />
        </div>
      </header>

      <section className="relative ">
        <div className="bg-blue-700 flex items-center min-h-[450px] overflow-hidden">
          <div className="container mx-auto flex relative">

            <div className="w-1/2 relative z-10 flex justify-end pr-10">
              <img
                src={book}
                alt="Instructor"
                className="h-[500px] mr-24 object-cover mt-[-50px]"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-[#333] border-4 border-white text-white rounded-full w-32 h-32 flex flex-col items-center justify-center">
                <span className="text-xs uppercase">Филиала</span>
                <span className="text-5xl font-bold">4</span>
              </div>
            </div>

            <div className=" justify-center pl-24 py-16 text-white">
              <h2 className="text-4xl font-bold uppercase leading-tight mb-6">
                Учись рядом <br /> с работой или <br /> домом
              </h2>
              <p className="mb-8 opacity-90 max-w-sm">
                Четыре учебных класса в разных частях города! Выбирай удобный и записывайся на обучение.
              </p>
              <button className="bg-white text-[#5cb8ff] font-bold py-3 px-8 rounded-full w-fit hover:bg-gray-100 transition">
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center py-16 text-white"
          style={{ backgroundImage: `url(${map})`, backgroundColor: 'rgba(0,0,0,0.85)', backgroundBlendMode: 'overlay' }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              <div className="flex flex-col items-center text-center">
                <div className="mb-4"></div>
                <h4 className="font-bold uppercase tracking-wider">СПОРТИВНАЯ</h4>
                <p className="text-sm text-gray-400 mt-2 mb-4">ул. Спортивная 5</p>
                <button className="border border-white/30 px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  Выбрать
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4"></div>
                <h4 className="font-bold uppercase tracking-wider">ЭГЕРШЕЛЬД</h4>
                <p className="text-sm text-gray-400 mt-2 mb-4">ул. Верхнепортовая 38 (Феско-Холл)</p>
                <button className="border border-white/30 px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  Выбрать
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4"></div>
                <h4 className="font-bold uppercase tracking-wider">ЦЕНТР</h4>
                <p className="text-sm text-gray-400 mt-2 mb-4">ул. Алеутская 28</p>
                <button className="border border-white/30 px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  Выбрать
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4"></div>
                <h4 className="font-bold uppercase tracking-wider">СТОЛЕТИЕ</h4>
                <p className="text-sm text-gray-400 mt-2 mb-4">ул. Проспект 100-летия Владивостоку 30</p>
                <button className="border border-white/30 px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  Выбрать
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
          <div className="border-y border-gray-100 py-6 bg-white shadow-sm">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-6">
              {[
                "Приятные цены",
                "Гибкий график",
                "Скидки студентам",
                "Высокая сдаваемость",
                "Беспроцентная рассрочка",
                "Уникальный VR"
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <section className="relative py-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 relative flex justify-center">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[350px] font-black text-blue-50 leading-none select-none z-0">
                  B
                </span>
                <img
                  src={carImg}
                  alt="Category B"
                  className="relative z-10 w-full max-w-[450px] drop-shadow-2xl"
                />
                <div className="absolute bottom-10 right-20 z-20 flex items-center gap-2">
                  <div className="w-4 h-4 border-l-2 border-b-2 border-blue-500"></div>
                  <span className="font-bold text-gray-800 tracking-widest uppercase text-xs">Категория</span>
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-16 md:mt-0 text-right flex flex-col items-end">
                <h2 className="text-3xl font-light text-gray-500 leading-tight">
                  Обучение вождению <br />
                  <span className="font-semibold text-gray-800">на легковом автомобиле</span>
                </h2>
                <div className="text-5xl font-black text-gray-900 mt-4 mb-8">
                  OT 36 950 ₽
                </div>

                <ul className="space-y-3 mb-10 text-sm text-gray-500 font-medium">
                  <li className="flex items-center justify-end gap-3">Длительность обучения 3 месяца <span className="text-blue-500">←</span></li>
                  <li className="flex items-center justify-end gap-3">Беспроцентная рассрочка <span className="text-blue-500">←</span></li>
                  <li className="flex items-center justify-end gap-3">Идеально сбалансированная цена <span className="text-blue-500">←</span></li>
                  <li className="flex items-center justify-end gap-3">Опытные и вежливые инструкторы <span className="text-blue-500">←</span></li>
                  <li className="flex items-center justify-end gap-3">В стоимость входят все расходы <span className="text-blue-500">←</span></li>
                  <li className="flex items-center justify-end gap-3">Гибкая система графиков <span className="text-blue-500">←</span></li>
                </ul>

                <button className="bg-blue-400 text-white font-bold py-4 px-16 rounded-lg hover:bg-blue-500 transition-all uppercase text-xs tracking-widest shadow-lg">
                  Записаться
                </button>
              </div>
            </div>
          </section>

          <div className="bg-[#2d2d2d] py-10">
            <div className="container mx-auto flex justify-center items-center gap-6 text-white cursor-pointer transition-all group">
              <div className="border-2 border-white rounded-full w-12 h-12 flex items-center justify-center ">
                <div className="w-4 h-4 bg-white rounded-full "></div>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">
                Получить консультацию в WhatsApp
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/2 z-10">
            <h2 className="text-3xl font-light text-gray-600 mb-2">
              Обучение на права ГИМС
            </h2>
            <div className="text-4xl font-black text-gray-900 mb-6">
              OT 23 900 ₽
            </div>

            <p className="text-gray-500 mb-4 font-medium">Получи права на управление:</p>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-center gap-2">→ гидроциклом</li>
              <li className="flex items-center gap-2">→ катером</li>
              <li className="flex items-center gap-2">→ парусной яхтой</li>
              <li className="flex items-center gap-2">→ другими маломерными судами</li>
            </ul>

            <button className="bg-blue-400 text-white font-bold py-3 px-10 rounded-full hover:bg-blue-500 transition-all uppercase text-xs tracking-widest shadow-md">
              Подробнее
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-end items-center">
            <div className="absolute left-0 bottom-10 z-20">

            </div>

            <div>
              <img
                src={water}
                alt="Water Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#2d2d2d] py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter text-center md:text-left">
            УЧЕБНО – МЕТОДИЧЕСКИЙ ЦЕНТР ЭГЕРШЕЛЬД
          </h2>

          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-xl tracking-tighter">ЭГЕРШЕЛЬД</div>
              <div className="text-[10px] uppercase opacity-70">учебно-методический центр</div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-10">

          <div className="w-full md:w-1/2 text-left mt-10 md:mt-0 ml-20">
            <h2 className="text-3xl font-light text-gray-500">Обучение вождению</h2>
            <h3 className="text-3xl font-bold mb-2">на мотоцикле</h3>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl line-through text-gray-400">18 500 ₽</span>
              <span className="text-5xl font-black text-blue-400">16 500 ₽*</span>
            </div>
            <ul className="space-y-3 mb-10 text-gray-500 text-sm">
              <li>→ Длительность обучения 2 месяца</li>
              <li>→ В стоимость входят все расходы по обучению</li>
              <li>→ В ГАИ сдается только теория и автодром</li>
              <li>→ Рассрочка без процентов</li>
              <li>→ Онлайн обучение</li>
            </ul>
            <button className="bg-blue-400 text-white px-12 py-3 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-blue-500 transition">Записаться</button>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            <span className="absolute text-[300px] font-black text-blue-100/50 leading-none -z-10 select-none">A</span>
            <img src={img1} alt="Motorcycle" className="w-full max-w-md drop-shadow-2xl z-10" />
            <div className="absolute bottom-10 left-10 z-20 flex items-center gap-2">
              <div className="w-4 h-4 border-r-2 border-b-2 border-blue-400"></div>

            </div>
          </div>
        </div>
      </section>

      <div className="bg-neutral-800 py-10">
        <div className="container mx-auto flex justify-center items-center gap-6 text-white cursor-pointer hover:text-green-400 transition group">
          <div className="border-2 border-white rounded-full p-4 ">
            <span className="text-3xl"></span>
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter">Получить консультацию в WhatsApp</h3>
        </div>
      </div>



      <section className="py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light text-gray-400 uppercase tracking-tighter">Онлайн обучение</h2>
            <h3 className="text-4xl font-bold text-blue-400 mb-8 uppercase">Кому подойдет:</h3>
            <ul className="space-y-4 text-gray-500 text-sm italic">
              <li>→ У кого нет времени на дорогу до лекций</li>
              <li>→ Вы находитесь в другом городе</li>
              <li>→ Есть ноутбук, планшет или телефон</li>
              <li>→ Вы сможете освоить онлайн теоретическую часть целиком</li>
              <li>→ Вы хотите водить автомобиль</li>
              <li>→ Что здесь объяснять, все понятно Жми на эту кнопку</li>
            </ul>
            <div className="mt-10 flex gap-4">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest">Записаться</button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-50">Получить консультацию</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img src={img2} alt="Online Learning" className="w-full drop-shadow-2xl" />
            <div className="absolute -bottom-10 -right-5">
              <div className="bg-blue-400 text-white p-10 rounded-full font-black text-4xl shadow-xl transform rotate-12">*new</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black  mb-12  ml-15">
            Что о нас говорят обучающиеся?
          </h2>
          <p className='ml-15'>
            Мы опросили десятки наших учеников и узнали, почему они считают автошколу ДРАЙВИНГСКУЛ лучшей!
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-[250px] h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img src={video_1} alt="" className='mt-2' />
            </div>

            <div className="w-full md:w-[250px] h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img src={video_2} alt="" className='mt-2' />
            </div>

            <div className="w-full md:w-[250px] h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img src={video_3} alt="" className='mt-2' />
            </div>


            <div className="w-full md:w-[250px] h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img src={video_4} alt="" className='mt-2' />
            </div>

          </div>
        </div>
      </section>
      <div className="font-sans bg-white">

      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          
          <div className="mb-12 ml-70">
            <h2 className="text-4xl font-black text-gray-800 mb-4">Отзывы наших учеников</h2>
            <p className="text-gray-500 font-medium">Нас выбрали более 6 000 учеников</p>
            <p className="text-gray-400 text-sm italic">Листай сообщения, которые присылают наши выпускники 👉</p>
          </div>

          <div className="relative flex items-center gap-10  mr-60">
            <div className="hidden lg:block relative w-64 h-64">
             
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl"></span>
              </div>
            </div>

            <div className="flex-1 bg-white border border-gray-100 rounded-[40px] p-10 shadow-sm  ">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                
                <div className="text-center w-40">
                  <div className="relative inline-block">
                    <img 
                      src={mask} 
                      alt="Reviewer" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-400 p-2 rounded-full border-4 border-white">
                       <div className="w-4 h-4 bg-white rounded-full"></div> 
                    </div>
                  </div>
                  <h4 className="mt-4 font-bold text-gray-800 leading-tight">
                    Тимоханова <br /> Анастасия
                  </h4>
                </div>

                <div className="flex-1 relative pt-4">
                  <span className="text-4xl text-blue-300 absolute -top-2 -left-4 font-serif">“</span>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Здравствуйте, хочу поблагодарить Вашу автошколу за 
                    полученные знания и навыки. В особенности выражаю 
                    большую благодарность Баринову Олегу Павловичу за 
                    умение доступно донести информацию, научить и освоить 
                    навыки вождения. Хороших Вам учеников. И, да, сдать с 
                    первого раза легко, главное, не переживать и верить в себя! 😊
                  </p>
                  <span className="text-4xl text-blue-300 absolute -bottom-6 right-0 font-serif">”</span>
                  
                  <div className="mt-10">
                    <span className="text-blue-300 font-bold text-xs uppercase tracking-widest">#явыбираюдрайвингскул</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div>
        <div className="font-sans text-gray-900 bg-white overflow-x-hidden"
        style={{ backgroundImage: `url(${img___3})`, backgroundColor: 'rgba(0,0,0,0.85)', backgroundBlendMode: 'overlay' }}>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-tighter mb-4">
            Мы в СОЦИАЛЬНЫХ СЕТЯХ <span className="text-blue-400">@drivingschoolvl</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-10 text-sm leading-relaxed">
            Подписывайтесь на наши социальные сети, следите за новостями. Там мы публикуем фотографии и видео, 
            проводим конкурсы на бесплатное обучение и выкладываем отзывы #ДРАЙВИНГСКУЛ
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            <div className="aspect-square bg-gray-200 overflow-hidden"><img src={img__1} className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-300 overflow-hidden"><img src={img__2} className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 overflow-hidden"><img src={img__3} className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-300 overflow-hidden"><img src={img__4} className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 overflow-hidden"><img src={img__5} className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>


      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 z-10">
            <h2 className="text-4xl font-black text-gray-800 leading-tight mb-8">
              Первый в России тренажер <br /> 
              автосимулятор с режимом <br /> 
              виртуальной реальности
            </h2>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-gray-600 font-medium">
                <span className="text-blue-400 text-xl"></span> Помогает победить страх дороги
              </li>
              <li className="flex items-center gap-4 text-gray-600 font-medium">
                <span className="text-blue-400 text-xl"></span> Развивает когнитивные функции мозга
              </li>
              <li className="flex items-center gap-4 text-gray-600 font-medium">
                <span className="text-blue-400 text-xl"></span> Тренирует водительские навыки
              </li>
            </ul>
            <button className="bg-blue-400 text-white px-10 py-4 rounded-lg font-black uppercase text-xs tracking-widest shadow-xl hover:bg-blue-500 transition">
              Попробовать
            </button>
          </div>
          <div className="w-full md:w-1/2 relative mt-16 md:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-0 blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

             </div>
        </div>

     <div className="flex ">
        <div className="mt-20 ml-20">
            <img src={diriveing} alt="" />
        </div>
        <div>
            <h1 className='mt-15'>Узнайте больше</h1>
            <p className='mt-5'>В конце 2016 года мы разработали и внедрили в процесс обучения <br /> тренажер-автосимулятор с режимом виртуальной реальности. <br />Тренажер работает на базе VR-очков и специального програмного обеспечения. <br /> Вы сможете пройти предварительное обучение как на автодроме, <br /> так и на городе. Важно помнить, что тренажер входит в стоимость и является <br /> совершенно бесплатным для наших обучающихся. <br /> Перед посадкой в реальный автомобиль, каждый из Вас сможет справиться со  <br />своими страхами и испытать свои силы за рулем, на дорогах в виртуальной реальности.</p>
            <p className='mt-5'>Смотреть на<span>YOUTUBE</span></p>
        </div>
     </div>
     <div className="py-12 px-6 bg-white mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="text-center md:border-r border-gray-200 px-4 last:border-0">
          <h3 className="text-lg font-bold tracking-[0.2em] mb-6 text-gray-900">
            О НАС
          </h3>
          <p className="text-sm leading-6 text-gray-600 font-light">
            Автошкола ДРАЙВИНГСКУЛ создана командой профессионалов. За 10 лет работы мы 
            выпустили более 9000 водителей категории «А» и «В». В ДРАЙВИНГСКУЛ четыре 
            учебных класса, расположенных в шаговой доступности от остановок, которые 
            оборудованы современной материально-технической базой.
          </p>
        </div>

        <div className="text-center md:border-r border-gray-200 px-4 last:border-0">
          <h3 className="text-lg font-bold tracking-[0.2em] mb-6 text-gray-900">
            ОФИС
          </h3>
          <p className="text-sm leading-6 text-gray-600 font-light">
            На сегодняшний день ДРАЙВИНГСКУЛ – это 4 учебных класса, расположенных в 
            разных частях города вблизи от остановок общественного транспорта. Наши 
            администраторы вежливи, быстры и очень точны. Мы помним обо всех учениках 
            и отслеживаем процесс обучения до самого получения удостоверения.
          </p>
        </div>

        <div className="text-center px-4">
          <h3 className="text-lg font-bold tracking-[0.2em] mb-6 text-gray-900">
            АВТОПАРК
          </h3>
          <p className="text-sm leading-6 text-gray-600 font-light">
            Практическая часть проходит на специально оборудованных автомобилях и 
            включает несколько этапов обучения: автодром и город. Вождение в городе 
            проходит по 6 учебным маршрутам. Среди учебных автомобилей — модели с 
            левосторонним расположением руля: Toyota Prius, Hyundai Solaris и другие.
          </p>
        </div>

      </div>
     </div>
     <div className='mt-20'>
          <div className='w-full h-[500px] '>
                <nav className='ml-35 bg-white mt-20 '>
                    <ul className='flex gap-10 items-center'>
                      <li>учись с драйвингскул</li>
                      <li>учись с драйвингскул</li>
                      <li className='w-[312px] h-31px'><img src={car_logo2} alt="" /></li>
                      <li>учись с драйвингскул</li>
                      <li>учись с драйвингскул</li>
                    </ul>
                </nav>
                <button className='text-white bg-blue-600 w-[250px] h-[50px] rounded-3xl ml-143 mt-20'>+7 994 0000 266</button>

                <div className='mt-20 flex gap-10 ml-60'>
                    <div>
                      <h1>Спортивная</h1>
                      <p>ул. Спортивная 4</p>
                    </div>
                    <div>
                      <h1>Эгершельд</h1>
                      <p>ул. Верхнепортовая 38 (Феско-Холл)</p>
                    </div>
                    <div>
                      <h1>Центр</h1>
                      <p>Алеутская</p>
                    </div>
                    <div>
                      <h1>Столетие</h1>
                      <p>ул. Проспект 100-летия Владивостоку 20</p>
                    </div>
                </div>

         </div>
     </div>
     <div className='mt-20'>
        <img src={map__} alt="" />
     </div>
    </div>
  )
}

export default Hamidulloh