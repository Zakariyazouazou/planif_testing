import React from 'react';
import { Reveal } from '../Component/Reveal';
import Image from 'next/image';
import PhoneWeb from "../../assets/PhoneWeb.png"
interface Props {
   className?: string;
}

const DiensenIntro: React.FC<Props> = ({className}:Props) => {
  return (
    <div className={className}>
       <Reveal className="w-[80%] ml-[10%] pt-10 hidden permax:block">
           <Image src={PhoneWeb} alt="PlanifyPhones" className='w-full elementjump '/>
        </Reveal>
        <div className='w-full flex flex-row flex-wrap justify-around '>
          <div className='w-1/2 permax:w-full permax:px-2'>
            <Reveal>
            <h1 className='text-[#3F0071] text-[64px] font-semibold 
            leading-[80px] tracking-[0.1px] permaxMaxAlphaa:text-[50px] permax3:text-[35px]
            permax3:leading-normal telphone:text-[25px]'>
              Take a look in our services and which one 
              fulfills your needs
            </h1>
            </Reveal>
            <Reveal>
              <h1 className='text-black text-[28px] 
              leading-[80px] tracking-[0.1px] permaxMaxAlphaa:text-[22px] permax3:text-[20px]
              permax3:leading-normal telphone:text-[17px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et et dolore magna aliqua. 
              </h1>
          </Reveal>
          </div>
          <Reveal className="w-1/2 pt-9">
              <Image src={PhoneWeb} alt="PlanifyPhones" className='ml-[10%] w-[80%] h-[600px] elementjump permax:hidden'/>
          </Reveal>
        </div>
    </div>
  );
}

export default DiensenIntro;
