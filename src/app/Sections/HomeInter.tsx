'use client'
import React from 'react';
import twoHpnes from "../../assets/twophones.png"
import Image from 'next/image';
import { Reveal } from '../Component/Reveal';

interface Props {
    className?:String
}

const HomeInter: React.FC<Props> = ({className}:Props) => {
  return (
    <div className={`${className}`}>
        <div className='w-full flex justify-around flex-wrap flex-rox pt-20 '>
             <Image src={twoHpnes} alt='PlanifyPhones' className='w-[60%]  elementjump'  />
             <div className='w-[40%] permax2:w-full permax2:px-5'>
                 <Reveal>
                 <h1 className='text-[#3F0071] text-[64px] font-semibold leading-[80px] tracking-[0.1px]
                 permaxLoading1:text-[50px] permaxLoading1:leading-normal permaxMaxAlphaa:text-[40px] permax2:text-center
                 permax:text-[30px] permax:my-5' >
                     With planfy you can organize your work life as you want.   
                 </h1>
                 </Reveal>
                 <Reveal>
                  <h1 className=' text-[24px] font-semibold leading-[80px] tracking-[0.1px] 
                 permaxLoading1:leading-normal permaxMaxAlphaa:text-[18px]  '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </h1>
                 </Reveal>
             </div>
        </div>
    </div>
  );
}

export default HomeInter;
