import React from 'react';
import { ManagerOffers } from '../data/Constante';
import webSsiteModel from '../../assets/WebSite.png'
import { Reveal } from '../Component/Reveal';
import Image from 'next/image';
import {BsArrowReturnRight} from "react-icons/bs"



interface Props {
   className?: string;
}

const OverManager: React.FC<Props> = ({className}:Props) => {
  return (
    <div className={className}>
        <Reveal className="w-full pl-4">
             <h1 className='text-[#3F0071] text-[40px] permax:text-[30px] telphone:text-[20px] telphone:leading-normal font-bold mb-5 tracking-[0.1px]  '>
                Manager Offers
              </h1>
         </Reveal>
         <div className='w-full flex flex-row flex-wrap justify-around permax3:items-center'>
            <Reveal className='w-[60%] permax:w-full permax:mt-5' >
                <Image src={webSsiteModel} alt='EmployyeOfferPlanify' className='w-[80%] ml-[10%] elementjump ' loading='lazy'/>
            </Reveal>
            <div className='w-[40%] permax:w-full permax:px-4'>
                {
                  ManagerOffers.map((element , index)=>{
                       return (
                             <Reveal key={index} className="w-full">
                                 <>
                                     <h1 className='flex items-center text-[#F60C87] text-[26px] font-semibold
                                     leading-[50px] tracking-[0.1px] permaxMaxAlphaa:leading-normal telphone:text-[20px] '>
                                       <BsArrowReturnRight className="text-2xl mr-1"/>
                                        {element.OfferName}
                                     </h1> 
                                     <h1 className='text-[20px] leading-[50px] tracking-[0.1px]
                                     permaxMaxAlphaa:leading-normal telphone:text-[16px]'>
                                        {element.OfferExpalin}
                                     </h1>
                                 </>
                             </Reveal>
                       )
                  })
                }   
            </div>
         </div>
    </div>
  );
}

export default OverManager;
