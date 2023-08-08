"use client";

import React from "react";
import { Reveal } from "../Component/Reveal";
import { CardPrise } from "../data/Constante";
import { MdOutlineDone } from "react-icons/md";
import { Button } from "@material-tailwind/react";

import { Swiper, SwiperSlide  } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



interface Props {
  className?: string;
  screenSize:any
}

const HomePrises: React.FC<Props> = ({ className , screenSize }: Props) => {
  return (
    <div className={className}>
      <div className="w-[90%] h-[530px]   ml-[5%] permax:w-full permax:ml-0 pt-4">
        <Reveal>
          <h1
            className="w-full text-center text-white text-[40px] font-semibold tracking-[0.1px] leading-[50px] 
          telphone:text-[30px] telphone:leading-normal "
          >
            Subscription plans
          </h1>
        </Reveal>
        <Reveal>
          <h1
            className="text-white text-[26px] font-bold leading-[50px] tracking-[0.1px]
                                    telphone:text-[20px] telphone:leading-normal 
                                      text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h1>
        </Reveal>
        <Reveal className="w-full">
            <Button color="white" className="w-[80%] ml-[10%] my-5 text-[#F60C87]" >
                See All Plans 
            </Button>
        </Reveal>
        <Reveal className='w-full PriseSwiper'>
        <Swiper 
            slidesPerView={screenSize < 1254 ? (screenSize < 900 ? 1: 2) : 3}
            spaceBetween={1}
            loop={true}
            pagination={{
              clickable: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full "
         >
             {CardPrise.map((element, index) => {
            return (
              <SwiperSlide  className="py-10 px-2" key={index}>
                  <div
                key={index + "card"}
                className="w-[437px] permax:w-[300px] h-[586px] bg-[#F3F3F3] px-4 rounded-2xl"
              >
                <h1 className="mt-[25px] w-full text-[40px] text-[#F60C87] text-center  font-semibold
                permax-xs:text-[30px]">
                  {element.CardName}
                </h1>
                <h1 className="mt-[17px] text-[20px] permax-xs:mt-[12px] permax-xs:text-[18px] tracking-[0.1px] leading-[30px]">
                  {element.CardExplain}
                </h1>
                <div className="w-full px-4">
                  {element.CardBenefis.map((element, index) => (
                    <h1
                      key={index}
                      className="w-full flex text-[20px] my-5 justify-center permax-xs:text-[15px]"
                    >
                      <MdOutlineDone className="text-xl mr-2 text-[#F60C87]" />
                      <span>{element}</span>
                    </h1>
                  ))}
                </div>
                <h1 className="mt-5 text-[20px]">For Only</h1>
                <h1 className="w-full text-center flex justify-center text-[30px] text-[#F60C87] ">
                  €{" "}
                  <span className="text-[40px] m-2 font-bold">
                    {element.Prise}
                  </span>
                </h1>
                <div className="w-full flex justify-center">
                  <Button color="light-blue" className="w-[80%] bg-[#3F0071]">
                    Select service
                  </Button>
                </div>
              </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </Reveal>
     
      </div>
    </div>
  );
};

export default HomePrises;
