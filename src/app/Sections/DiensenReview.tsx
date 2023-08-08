import React from 'react';
import { Reveal } from '../Component/Reveal';
import { Avatar } from '@material-tailwind/react';



const AvatrImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
interface Props {
  className?: string;
}

const DiensenReview: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className='w-full permax:w-full permax:px-4'>
        <Reveal>
          <h1 className='text-[#3F0071] text-[40px] permax:text-[30px] telphone:text-[20px] telphone:leading-normal font-bold mb-5 tracking-[0.1px]  '>
            Services review
          </h1>
        </Reveal>
        <Reveal>
          <h1 className='text-[22px] leading-[50px] tracking-[0.1px] permax:text-[18px] telphone:text-[15px] telphone:leading-normal '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
            labore et et dolore magna aliqua.
          </h1>
        </Reveal>
      </div>
      <div className='mt-4 w-full flex flex-wrap flex-row justify-center'>
          {
            ["","",""].map((element,index)=>{
                return (
                    <Reveal key={index} className="w-[450px] h-[231px] permaxMedium:w-[80%]
                     permaxMedium:h-auto permaxMedium:py-5 rounded-xl bg-[#F3F3F3] m-4">
                         <div className='w-full'>
                              <div className='w-full flex justify-center py-4 items-center'>
                                  <Avatar src={AvatrImage} alt='Logo' className='mr-3'/>
                                  <div>
                                       <h1 className='text-[30px] zfolder:text-[20px] text-[#F60C87] font-semibold tracking-[0.1px] leading-[50px]'>
                                           Lorem Ipsum
                                       </h1>
                                       <h1 className='text-[16px] text-[#F60C87]  tracking-[0.1px] '>
                                          Lorem Ipsum
                                       </h1>
                                  </div>
                              </div>
                              <h1 className='mt-2 text-[16px]  tracking-[0.1px] px-4  '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et... 
                              </h1>
                         </div>
                    </Reveal>
                )
            })
          } 
      </div>
    </div>
  );
}

export default DiensenReview;
