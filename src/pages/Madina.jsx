import React from "react";

export default function Madina() {
  return (
    <div className="w-full font-sans bg-white text-black">
     
      <div className="w-full h-[80px] flex items-center justify-between px-[60px] border-b border-gray-200">
        <div className="text-[20px] font-semibold">Эгершельд</div>
        <div className="flex gap-[40px] text-[14px]">
          <span>Категории</span>
          <span>Цены</span>
          <span>Контакты</span>
          <span>Документы</span>
        </div>
        <div className="text-[14px]">+7 994 000 266</div>
      </div>

   
      <div className="w-full flex items-center justify-between px-[80px] py-[80px]">
        <div className="w-[520px]">
          <h1 className="text-[36px] leading-[46px] font-semibold mb-[25px]">
            Государственное удостоверение на право управления маломерным судном
          </h1>
          <p className="text-[16px] mb-[20px]">
            • гидроцикл<br />• катер<br />• парусное судно
          </p>
          <button className="bg-[#4FA3D9] text-white px-[22px] py-[12px] rounded-[8px] text-[14px]">
            Записаться на курс
          </button>
        </div>

        <div
          className="w-[1200px] h-[650px]  bg-cover bg-center"
          style={{ backgroundImage: "url('/boat.jpg')" }}
        ></div>
      </div>

     
      <div className="w-full flex items-center justify-between px-[80px] py-[80px]">
        <div
          className="w-[900px] h-[650px]  bg-cover bg-center"
          style={{ backgroundImage: "url('/boat2.png')" }}
        ></div>

        <div className="w-[520px]">
          <h2 className="text-[28px] leading-[38px] font-semibold mb-[20px]">
            Практические занятия проходят на базе самого большого яхт-клуба на Дальнем Востоке — «Семь футов»
          </h2>
          <p className="text-[15px] leading-[24px] mb-[25px]">
            В ходе тренировок на воде на катере или парусной яхте время подбирается индивидуально.
          </p>
          <button className="bg-[#4FA3D9] text-white px-[20px] py-[10px] rounded-[6px] text-[14px]">
            Узнать стоимость
          </button>
        </div>
      </div>
      
      
<div
  className="w-full h-[220px] bg-cover bg-center relative flex items-center justify-center"
  style={{ backgroundImage: "url('/water.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-40"></div>

  <div className="relative w-full flex justify-around text-white px-[80px]">
    <div className="text-center w-[250px]">
      <h3 className="text-[16px] font-semibold mb-[10px]">
        Внутренние водные пути (ВВП)
      </h3>
      <p className="text-[12px] leading-[18px]">
        судоходные реки и озёра
      </p>
    </div>

    <div className="text-center w-[250px]">
      <h3 className="text-[16px] font-semibold mb-[10px]">
        Внутренние пути (ВП)
      </h3>
      <p className="text-[12px] leading-[18px]">
        не судоходные реки и озёра
      </p>
    </div>

    <div className="text-center w-[250px]">
      <h3 className="text-[16px] font-semibold mb-[10px]">
        Морские пути (МП)
      </h3>
      <p className="text-[12px] leading-[18px]">
        морские воды va portlar
      </p>
    </div>
  </div>
</div>


<div className="w-full flex items-center justify-between px-[80px] py-[80px] bg-[#F7F7F7]">
  <div className="w-[520px]">
    <h2 className="text-[28px] leading-[38px] font-semibold mb-[15px]">
      Теоретические занятия проходят в учебно-методическом центре
    </h2>
    <p className="text-[#4FA3D9] text-[20px] mb-[10px]">
      «ЭГЕРШЕЛЬД»
    </p>
    <p className="text-[18px] font-semibold mb-[15px]">
      ОТ 23 900 ₽
    </p>
    <button className="bg-[#4FA3D9] text-white px-[20px] py-[10px] rounded-[6px] text-[14px]">
      Оставить заявку
    </button>
  </div>

  <div
    className="w-[600px] h-[590px] bg-cover bg-center"
    style={{ backgroundImage: "url('/class.png')" }}
  ></div>
</div>


<div className="w-full bg-[#2B2B2B] text-white py-[30px] text-center text-[18px]">
  УЧЕБНО – МЕТОДИЧЕСКИЙ ЦЕНТР ЭГЕРШЕЛЬД
</div>

     
      <div className="w-full bg-[#EEF3F7] py-[80px] flex flex-col items-center">
        <h2 className="text-[30px] font-semibold mb-[20px] text-center">
          Свяжитесь с нами прямо сейчас!
        </h2>

        <p className="text-[16px] mb-[30px]">
          Мы в социальных сетях
        </p>

        <div className="w-[650px] bg-white rounded-[20px] shadow-lg px-[40px] py-[30px] text-center">
          <h3 className="text-[18px] font-semibold mb-[15px]">Контакты</h3>
          <p className="text-[14px] mb-[8px]">+7 (831) 423-76-76</p>
          <p className="text-[14px] mb-[8px]">ул. Верхнепортовая 38</p>
          <p className="text-[14px]">drivingschool@mail.ru</p>
        </div>
      </div>

     
      <div className="w-full flex justify-center bg-[#2F6FA3] py-[60px]">
        <div className="w-[900px] bg-[#4FA3D9] rounded-[12px] py-[40px] text-center text-white relative">
          <p className="text-[18px] mb-[10px]">+7 994 0000 266</p>
          <p className="text-[14px] mb-[20px]">Эгершельд</p>
          <div className="w-[80%] h-[1px] bg-white opacity-50 mx-auto"></div>
          <p className="text-[12px] mt-[15px] opacity-80">Доступны звонки, Telegram, WhatsApp</p>
        </div>
      </div>

    
      <div className="w-full h-[500px]">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Vladivostok&t=&z=11&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
        ></iframe>
      </div>

     
      <div className="w-full h-[80px] flex items-center justify-center text-[14px] border-t">
        Учебно-методически центр «Эгершельд»
      </div>
    </div>
  );
}
