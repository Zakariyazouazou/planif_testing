import React from 'react';
import { IconType } from 'react-icons';
import { BsTelephone } from "react-icons/bs"
import { HiLocationMarker } from "react-icons/hi"
import { MdOutlineMailOutline } from 'react-icons/md'
import { Reveal } from '../Component/Reveal';
import { CountryNumber } from '../data/Constante';
import Image from 'next/image';
import {
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Textarea
} from "@material-tailwind/react";


interface Props {
    className?: string;
}

interface ContactType {
    icon: IconType,
    Explain: String,
    ContactMethode: String,
    ContactName: String
}

const ContactPlanify: ContactType[] = [
    {
        icon: BsTelephone,
        ContactName: "Call us",
        Explain: "Mon - Fry from 08 am to 5 pm",
        ContactMethode: "+31850601960"
    },
    {
        icon: HiLocationMarker,
        ContactName: "Dubai Office ",
        Explain: "Netherlands Office ",
        ContactMethode: "Steenplaetsstraat 6 4.14, 2288AA Rijswijk"
    },
    {
        icon: MdOutlineMailOutline,
        ContactName: "Email us",
        Explain: "Talk with our friendly team",
        ContactMethode: "info@planfy.com"
    }
]



const ContactMethode: React.FC<Props> = ({ className }: Props) => {
    const [country, setCountry] = React.useState(CountryNumber[0]);
    return (
        <div className={className}>
            <div className='w-full permax:px-4 mb-5'>
                <Reveal>
                    <h1 className='text-[#3F0071] text-[40px] permax:text-[30px] telphone:text-[20px] telphone:leading-normal font-bold mb-5 tracking-[0.1px]  '>
                    Get in touch with us 
                    </h1>
                </Reveal>
                <Reveal>
                    <h1 className='text-[22px] leading-[50px] tracking-[0.1px] permax:text-[18px] telphone:text-[15px] telphone:leading-normal '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris 
                    nisi ut aliquip ex ea commodo consequat.
                    </h1>
                </Reveal>
            </div>
            <div className='w-full flex flex-row flex-wrap justify-around'>
                <Reveal className='w-[48%] px-2 py-4 bg-[#F3F3F3] rounded-xl permax:w-full m-1'>
                    <div className='w-full'>
                        <h1 className='text-[#EE268F] leading-[20px] text-[20px] font-bold
                        tracking-[0.1px] my-4'>Name</h1>
                        <div className="relative flex  w-[97%]">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="!border !border-pink-gray-50 bg-white text-pink-gray-500 shadow-lg shadow-pink-gray-900/5 ring-4 ring-transparent placeholder:text-pink-gray-200 focus:!border-pink-500 focus:!border-t-pink-500 focus:ring-pink-500/20"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{ className: "min-w-[100px]" }}
                            />
                        </div>

                        <h1 className='text-[#EE268F] leading-[20px] text-[20px] font-bold
                        tracking-[0.1px] my-4'>Email</h1>
                        <div className="relative flex  w-[97%]">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="!border !border-pink-gray-50 bg-white text-pink-gray-500 shadow-lg shadow-pink-gray-900/5 ring-4 ring-transparent placeholder:text-pink-gray-200 focus:!border-pink-500 focus:!border-t-pink-500 focus:ring-pink-500/20"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{ className: "min-w-[100px]" }}
                            />
                        </div>

                        <h1 className='text-[#EE268F] leading-[20px] text-[20px] font-bold
                        tracking-[0.1px] my-4'>Phone number</h1>
                        <div className="relative flex  w-[97%]  zfolder:overflow-hidden">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-pink-gray-200 bg-[#EAB4F8] pl-3"
                                    >
                                        <img
                                            width={10}
                                            height={10}
                                            src={country.image}
                                            alt="CountryImage"
                                            className="h-4 w-4 rounded-full object-cover"
                                        />
                                        {CountryNumber[0].code}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {CountryNumber.map((name, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={name.code}
                                                className="flex items-center gap-2"
                                                onClick={() => setCountry(name)}
                                            >
                                                <img
                                                    width={10}
                                                    height={10}
                                                    src={name.image}
                                                    alt="PlanifyCountry"
                                                    className="h-5 w-5 rounded-full object-cover"
                                                />
                                                {name.name} <span className="ml-auto">{name.code}</span>
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>
                            <Input
                                type="tel"
                                placeholder="Mobile Number"
                                className="rounded-l-none !border-pink-gray-50 bg-white text-pink-gray-500 shadow-lg shadow-pink-gray-900/5 ring-4 ring-transparent placeholder:text-pink-gray-200 focus:!border-pink-500 focus:!border-t-pink-500 focus:ring-pink-500/20 focus:border-l-transparent border-l-transparent"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>

                        <h1 className='text-[#EE268F] leading-[20px] text-[20px] font-bold
                        tracking-[0.1px] my-4'>Message</h1>
                        <div className="relative flex  w-[97%]">
                            <Textarea
                                placeholder="Text"
                                className="!border !border-pink-gray-50 bg-white text-pink-gray-500 shadow-lg shadow-pink-gray-900/5 ring-4 ring-transparent placeholder:text-pink-gray-200 focus:!border-pink-500 focus:!border-t-pink-500 focus:ring-pink-500/20"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{ className: "min-w-[100px]" }}
                            />
                        </div>

                    </div>
                </Reveal>
                <div className='w-1/2 permax:w-full'>
                    {
                        ContactPlanify.map((element, index) => {
                            return (
                                <Reveal key={index}>
                                    <div className='flex bg-[#EAB4F8] py-5 px-1 rounded-xl my-2'>
                                        <div className='p-4 flex justify-center items-center rounded-md m-1 bg-white h-[52px]'>
                                            {React.createElement(element.icon, { className: "text-[#3F0071] text-xl elementjump " })}
                                        </div>
                                        <div className='ml-5'>
                                            <h1 className='text-[#3F0071] text-[28px] font-semibold 
                                                leading-[50px] tracking-[0.1px]'>
                                                {element.ContactName}
                                            </h1>
                                            <h1 className='text-[#3F0071] text-[20px] 
                                                leading-[50px] tracking-[0.1px]'>
                                                {element.Explain}
                                            </h1>
                                            <h1 className='text-[#3F0071] text-[24px] 
                                                leading-[20px] tracking-[0.1px] font-bold'>
                                                {element.ContactMethode}
                                            </h1>
                                        </div>
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ContactMethode;
