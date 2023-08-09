import React from 'react';
import {BsFacebook , BsInstagram , BsWhatsapp , 
    BsTelephone , } from "react-icons/bs"
import {HiLocationMarker} from "react-icons/hi"
import {MdOutlineMailOutline} from 'react-icons/md'
import Logo from "../../assets/Logo.png"
import Image from 'next/image';
import Link from 'next/link';
import {IconType} from "react-icons"


interface NavLink {
    LinkName: string;
    LinkAddress: string;
 }
 
interface SocialMediaLinks {
     icon : IconType ,
     ContactMethode:String

}
 
  const contactMe : SocialMediaLinks[] =[
         {
            icon : BsTelephone , 
            ContactMethode : "+31850601960"
         }, 
         {
            icon : HiLocationMarker , 
            ContactMethode : "Steenplaetsstraat 6 4.14, 2288AA Rijswijk"
         }, 
         {
            icon : MdOutlineMailOutline , 
            ContactMethode : "info@planfy.nl"
         }
  ]
 
 const NavbarreLinks: NavLink[] = [
    {
       LinkName: "Home",
       LinkAddress: "/"
    },
    {
       LinkName: "Over Ons",
       LinkAddress: "/Planify/About"
    },
    {
       LinkName: "Diensten",
       LinkAddress: "/Planify/Diensten"
    },
    {
       LinkName: "Contact",
       LinkAddress: "/Planify/Contact"
    }
 ]




interface Props {
    
}

const Footer: React.FC<Props> = (props) => {
  return (
    <div className='bg-[#9A007B]'>
           <div className='w-full flex flex-row flex-wrap justify-around  mt-10 py-10 items-center permax-xs:px-2 '>
          <div className='w-[30%] permax-xs:w-full permax-xs:px-5 permax-xs:pt-2 permax-xs:border-t-[1px] permax-xs:border-gray-100 text-center my-5'>
               <div className='w-full flex justify-center'>
                  <Image src={Logo} alt='PlanifyLogo' className='w-[20%]'/>
               </div>
               <h1 className='text-white text-center my-5 text-[25px] fony-bold'>
                   Plainig systeme For you !
               </h1>
          </div>
          <div className='w-[30%] permax-xs:w-full permax-xs:px-5 permax-xs:pt-2 permax-xs:border-t-[1px] permax-xs:border-gray-100'>
                {
                    NavbarreLinks.map((elemnt , index)=>{
                           return (
                               <Link  className='text-white my-2 font-bold cursor-pointer text-center 
                               text-[20px] block' key={index} href={elemnt.LinkAddress}>
                                   {elemnt.LinkName}
                               </Link>
                           )
                    })
                }
          </div>
          <div className='w-[30%] permax-xs:w-full permax-xs:px-5 permax-xs:pt-2 permax-xs:border-t-[1px] permax-xs:border-gray-100'>
              {
                 contactMe.map((element , index)=>(
                       <h1 key={index+"s"} className='text-white flex my-5 item-center font-bold permax-xs:justify-center text-center '>
                           {React.createElement(element.icon , {className:"text-3xl text-[#FF0086] mr-2 permax-xs:mr-0 "})}
                           {element.ContactMethode}
                       </h1>
                 ))
              }
          </div>
    </div>
    <div className='pt-5 border-t-[1px] border-gray-50'>
           <h1 className='w-full text-center text-white text-[28px]'>
              © All rights reserved to Planfy, 2023
           </h1>
           <div className='flex w-full justify-end py-4'>
                <a href="#" key={"socu=iall1"} className='mx-5 text-white text-3xl 
                transition-all ease-in-out duration-300 transform  bg-[#FF0086] p-2 rounded-xl cursor-pointer hover:bg-[#882359]  '><BsFacebook/></a>
                <a href="#" key={"socu=iall2"} className='mx-5 text-white text-3xl 
                transition-all ease-in-out duration-300 transform  bg-[#FF0086] p-2 rounded-xl cursor-pointer hover:bg-[#882359]  '><BsInstagram/></a>
                <a href="#" key={"socu=iall3"} className='mx-5 text-white text-3xl 
                transition-all ease-in-out duration-300 transform  bg-[#FF0086] p-2 rounded-xl cursor-pointer hover:bg-[#882359]  '><BsWhatsapp/></a>
           </div>
    </div>
    </div>
  );
}

export default Footer;
