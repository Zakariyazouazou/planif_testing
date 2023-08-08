import React from 'react';
import PhoneImages3 from "../../assets/threePhone.png"
import { Reveal } from '../Component/Reveal';
import Image from 'next/image';
interface Props {
  className?: string;
}

const OverIntro: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <Reveal className="w-1/2 ml-[25%] hidden permax:block">
           <Image src={PhoneImages3} alt="PlanifyPhones" className='w-full elementjump '/>
        </Reveal>
      <div className='w-full flex flex-row flex-wrap justify-around '>
        <div className='w-1/2 permax:w-full permax:px-4'>
         <Reveal>
             <h1 className='text-[#3F0071] text-[40px] permax:text-[30px] telphone:text-[20px] telphone:leading-normal font-bold mb-5 tracking-[0.1px]  '>
                Over ons
              </h1>
         </Reveal>
          <Reveal>
            <h1 className='text-[22px] leading-[50px] tracking-[0.1px] permax:text-[18px] telphone:text-[15px] telphone:leading-normal '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Duis aute irure dolor in reprehenderit in
                voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Duis aute irure dolor in reprehenderit in
                voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
            </h1>
          </Reveal>
        </div>
        <Reveal className="w-1/2">
           <Image src={PhoneImages3} alt="PlanifyPhones" className='ml-[10%] w-[80%] h-[600px] elementjump permax:hidden'/>
        </Reveal>
      </div>
    </div>
  );
}

export default OverIntro;
