'use client'

import React from 'react';
import { OfferExplain1 , OfferExplain2 } from '../data/Constante';
import PhoneCalendar from '../../assets/PhoneCalendar.png'
import { Reveal } from '../Component/Reveal';
import Image from 'next/image';
interface Props {
    className?: string;
}

const HomeOffer: React.FC<Props> = ({className}:Props) => {
  return (
    <div className={`${className} permax3:px-4`}>
         <h1 className='w-full text-center text-[#3F0071] text-[40px] font-semibold tracking-[0.1px] leading-[50px] 
         telphone:text-[30px] telphone:leading-normal'>
            The easiest way for you to organize your company.
         </h1>
         <h1 className='w-full text-center  text-[30px] my-10 font-semibold tracking-[0.1px] leading-[50px]
         telphone:text-[25px] telphone:leading-normal telphone:my-5'>
            With our features you can: 
         </h1>
         <div className='mt-5 flex flex-row flex-wrap justify-around permax3:justify-center'>
            <Reveal className='w-[32%] permax3:w-[90%]'>
            <>
                {
                    OfferExplain1.map((element , index)=>{
                        return (
                            <div key={index+"a"} className='w-full'>
                                <h1 className='text-[#F60C87] text-[26px] font-bold leading-[50px] tracking-[0.1px]
                                telphone:text-[20px] telphone:leading-normal 
                                  text-center'>
                                    {element.offerName}
                                </h1>
                                <h1 className='mt-3 mb-5 text-[20px] font-normal 
                                leading-[50px] tracking-[0.1px] 
                                telphone:text-[20px] telphone:leading-normal telphone:pb-4 '>
                                    {element.offerexplain}
                                </h1>
                            </div>
                        )
                    }) 
                }
            </>
            </Reveal>
             <Image src={PhoneCalendar} alt='phoneCalendatforPlanify' 
             className='w-[25%] h-[741px] permax3:h-[400px] permax3:my-10
             permaxMedium:w-[50%] zfolder:w-[70%] elementjump'
             loading='lazy'/>
            <Reveal className='w-[32%] permax3:w-[90%]'>
            <>
                {
                    OfferExplain1.map((element , index)=>{
                        return (
                            <div key={index+"a"} className='w-full'>
                                <h1 className='text-[#F60C87] text-[26px] font-bold leading-[50px] tracking-[0.1px]
                                telphone:text-[20px] telphone:leading-normal 
                                  text-center'>
                                    {element.offerName}
                                </h1>
                                <h1 className='mt-3 mb-5 text-[20px] font-normal 
                                leading-[50px] tracking-[0.1px] 
                                telphone:text-[20px] telphone:leading-normal telphone:pb-4 '>
                                    {element.offerexplain}
                                </h1>
                            </div>
                        )
                    }) 
                }
            </>
            </Reveal>
         </div>
    </div>
  );
}

export default HomeOffer;
