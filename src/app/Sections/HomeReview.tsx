"use client";
import React from "react";
import { Reveal } from "../Component/Reveal";
import { Reviews } from "../data/Constante";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
interface Props {
  className?: String;
  screenSize:any
}

const HomeReview: React.FC<Props> = ({ className , screenSize }: Props) => {
  return (
    <div className={`${className}`}>
      <Reveal>
        <h1
          className="w-full text-center text-[#3F0071] text-[40px] font-semibold tracking-[0.1px] leading-[50px] 
         telphone:text-[30px] telphone:leading-normal"
        >
          Onze sectoren & klanten
        </h1>
      </Reveal>
      <Reveal>
        <h1
          className="w-full text-center  text-[30px] my-10 font-semibold tracking-[0.1px] leading-[50px]
         telphone:text-[25px] telphone:leading-normal telphone:my-5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </h1>
      </Reveal>
      <Reveal className="w-full mt-10">
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
          {Reviews.map((element, index) => {
            return (
              <SwiperSlide 
              key={index}>
                <div
                  key={index+"zz"}
                  className="w-[326px] m-2 h-[525px] px-2 permax:w-[300px]  
                      zfolder:w-[260px] bg-[#F6F6F6] rounded-2xl "
                >
                  <h1
                    className="text-[#F60C87] text-[40px] my-[15px] font-semibold text-center tracking-[0.1px]
                            permax:text-[30px] telphone:text-[25px] telphone:my-[8px] zfolder:text-[22px]"
                  >
                    {element.CompanyName}
                  </h1>
                  <h1
                    className="text-[20px] tracking-[0.1px] leading-[50px]
                            permax:text-[19px] telphone:text-[17px] telphone:leading-[30px] zfolder:text-[15px]"
                  >
                    {element.CompanyReviews}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Reveal>
    </div>
  );
};

export default HomeReview;
