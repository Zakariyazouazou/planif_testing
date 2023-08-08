import React from 'react';
import { Reveal } from '../Component/Reveal';
import card1 from "../../assets/carre1.png"
import card2 from "../../assets/carre2.png"
import card3 from "../../assets/carre3.png"
import Image from 'next/image';




interface Props {
  className?: string;
}

const OverServices: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className='w-full flex flex-row flex-wrap '>
        <div className='w-1/2 permax:w-full'>
          <div className='flex'>
            <div className='w-1/2'>
              <Reveal className="w-[80%] ml-[10%]">
                <Image src={card1} alt='PlaniftService' className='w-full PulsateBck ' />
              </Reveal>
              <Reveal className="w-[80%] ml-[10%]">
                <Image src={card2} alt='PlaniftService' className='w-full PulsateBck ' />
              </Reveal>
            </div>
            <Reveal className="w-[65%] ">
              <Image src={card3} alt='PlaniftService' className='w-full PulsateBck ' />
            </Reveal>
          </div>
        </div>
        <div className='w-1/2 permax:w-full permax:px-5'>
          <h1 className='text-[#3F0071] text-[64px] font-semibold 
          leading-[80px] tracking-[0.1px] permaxMaxAlphaa:text-[50px] permax3:text-[35px]
          permax3:leading-normal telphone:text-[25px]'>
            No matter what is your company’s specialty
            Planfy is ideal for you
          </h1>
          <h1 className='text-[#3F0071] text-[40px] 
          leading-[80px] tracking-[0.1px] permaxMaxAlphaa:text-[30px] permax3:text-[28px]
          permax3:leading-normal telphone:text-[20px]'>
            We have features that fits all your needs.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OverServices;
