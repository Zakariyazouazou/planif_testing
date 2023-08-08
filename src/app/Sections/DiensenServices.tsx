import React from 'react';
import { Reveal } from '../Component/Reveal';
import { MdOutlineDone } from "react-icons/md"
import { Button } from '@material-tailwind/react';
interface Props {
  className?: string;
}

const DiensenServices: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className='w-full permax:w-full permax:px-4'>
        <Reveal>
          <h1 className='text-[#3F0071] text-[40px] permax:text-[30px] telphone:text-[20px] telphone:leading-normal font-bold mb-5 tracking-[0.1px]  '>
            Over ons
          </h1>
        </Reveal>
        <Reveal>
          <h1 className='text-[22px] leading-[50px] tracking-[0.1px] permax:text-[18px] telphone:text-[15px] telphone:leading-normal '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et et dolore magna aliqua. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et et dolore magna aliqua.
          </h1>
        </Reveal>
      </div>
      <div className='mt-5 flex flex-row flex-wrap justify-center'>
        {
          ["", "", ""].map((element, index) => {
            return (
              <Reveal key={index}>
                <div
                  key={index + "card"}
                  className="w-[437px] h-[586px]  permax:w-[80%] permax:h-auto permax:ml-[10%] permax:py-7 m-2  bg-[#F3F3F3] px-4 rounded-2xl z"
                >
                  <h1 className="mt-[25px] w-full text-[40px] text-[#F60C87] text-center  font-semibold
                        permax-xs:text-[30px]">
                    Lorem Ipsum
                  </h1>
                  <h1 className="mt-[17px] text-[20px] permax-xs:mt-[12px] permax-xs:text-[18px] tracking-[0.1px] leading-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...
                  </h1>
                  <div className="w-full px-4">
                    {["", "", "", ""].map((element, index) => (
                      <h1
                        key={index}
                        className="w-full flex text-[20px] my-5 justify-center permax-xs:text-[15px]"
                      >
                        <MdOutlineDone className="text-xl mr-2 text-[#F60C87]" />
                        <span>Benefits of the plan</span>
                      </h1>
                    ))}
                  </div>
                  <h1 className="mt-5 text-[20px]">For Only</h1>
                  <h1 className="w-full text-center flex justify-center text-[30px] text-[#F60C87] ">
                    €{" "}
                    <span className="text-[40px] m-2 font-bold">
                      22,95
                    </span>
                  </h1>
                  <div className="w-full flex justify-center">
                    <Button color="light-blue" className="w-[80%] bg-Move-grad2">
                      Select service
                    </Button>
                  </div>
                </div>
              </Reveal>
            )
          })
        }
      </div>
    </div>
  );
}

export default DiensenServices;
