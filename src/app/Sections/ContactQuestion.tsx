import React from 'react';
import { Reveal } from '../Component/Reveal';
import {SubscriptionQuestion , PaymentQuestion , OtherQuestion} from "../data/Constante"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

interface Props {
    className?: string;
}


interface AccordingIcone{
      id:Number , 
      open:Number, 
}

function Icon({ id, open }:AccordingIcone) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }




const ContactQuestion: React.FC<Props> = ({ className }: Props) => {
    const [isClicked , setisClicked] = React.useState<Number>(0); 
    const [Question , setQuestion ] = React.useState(SubscriptionQuestion)
    const [open, setOpen] = React.useState(0);
 
      const handleOpen = (value:any) => setOpen(open === value ? 0 : value);


    return (
        <div className={className}>
            <div className='w-full permax:px-4 mb-5'>
                <Reveal>
                    <h1 className='text-[#3F0071] text-[40px] permax:text-[30px] telphone:text-[20px] telphone:leading-normal font-bold mb-5 tracking-[0.1px]  '>
                        Frequently Asked Question
                    </h1>
                </Reveal>
                <Reveal>
                    <h1 className='text-[22px] leading-[50px] tracking-[0.1px] permax:text-[18px] telphone:text-[15px] telphone:leading-normal '>
                        Lorem ipsum dolor sit amet, consectetu
                    </h1>
                </Reveal>
            </div>
            <div className='w-full flex flex-row flex-wrap'>
                <div className='w-1/2 permax:w-full permax:flex permax:flex-row permax:flex-wrap justify-around'>
                    <h1 
                    onClick={()=>{setisClicked(0); setQuestion(SubscriptionQuestion)}}
                    className={`text-[#FF0086] bounceInBottom cursor-pointer inline-block text-[28px] font-semibold leading-[50px] tracking-[0.1px] 
                    permaxMedium:text-[20px] telphone:text-[17px]
                    transition-all transform ease-in duration-150 
                    ${isClicked === 0 ? "font-bold border-b-[1px] border-pink-700" : ""}`}
                    style={{
                        animationDelay: `${1 * 200}ms`,
                      }}>
                        Subscription
                    </h1>
                    <br className='permax:hidden' />
                    <h1 
                    onClick={()=>{setisClicked(1) ; setQuestion(PaymentQuestion)}}
                    className={`text-[#FF0086] bounceInBottom cursor-pointer text-[28px] inline-block font-semibold leading-[50px] tracking-[0.1px] 
                    permaxMedium:text-[20px] telphone:text-[17px]
                    transition-all transform ease-in duration-150 
                    ${isClicked === 1 ? "font-bold border-b-[1px] border-pink-700" : ""}`}
                    style={{
                        animationDelay: `${2 * 200}ms`,
                      }}>
                         Payment
                    </h1>
                    <br className='permax:hidden' />
                    <h1 onClick={()=>{setisClicked(2) ; setQuestion(OtherQuestion)}}
                    className={`text-[#FF0086] bounceInBottom cursor-pointer text-[28px] inline-block font-semibold leading-[50px] tracking-[0.1px] 
                    permaxMedium:text-[20px] telphone:text-[17px]
                    transition-all transform ease-in duration-150 
                    ${isClicked === 2 ? "font-bold border-b-[1px] border-pink-700" : ""}`}
                    style={{
                        animationDelay: `${3 * 200}ms`,
                      }}>
                        Payment
                    </h1>
                </div>
                <div className='w-1/2 permax:w-full permax:px-2 permax:mt-10'>
                     {
                        Question.map((element , index)=>{
                              return (
                                <Reveal key={index+1}>
                                    <Accordion className="mb-2 rounded-lg border border-pink-100 px-4"
                                 open={open === index+1} icon={<Icon id={index+1} open={open} />}>
                                <AccordionHeader className='border-none' onClick={() => handleOpen(index+1)}>{element.question}</AccordionHeader>
                                <AccordionBody>
                                  {element.Answer}
                                </AccordionBody>
                              </Accordion>
                                </Reveal>
                              )
                        })
                     }
                </div>
            </div>
        </div>
    );
}

export default ContactQuestion;
