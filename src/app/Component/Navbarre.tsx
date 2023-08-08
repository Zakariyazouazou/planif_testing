'use client'
import './ComponentStyle.css'
import React from 'react';
import Link from 'next/link';
import Logo from "../../assets/Planfy.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import MagneticButton from './MagneticButton';
import { Reveal } from './Reveal';
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"


interface Props {
   className?: string;
}

interface NavLink {
   LinkName: string;
   LinkAddress: string;
}



const NavbarreLinks: NavLink[] = [
   {
      LinkName: "Home",
      LinkAddress: "/"
   },
   {
      LinkName: "Over Ons",
      LinkAddress: "/Planify/AboutUs"
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

const Navbarre: React.FC<Props> = ({ }: Props) => {
   const [screenSize, setScreenSize] = React.useState<number>(window.innerWidth);


   // Function to handle window resize events and update the screen size state
   const handleResize = () => {
      setScreenSize(window.innerWidth);
   };

   React.useEffect(() => {
      // Add event listener for window resize
      handleResize()


      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
         window.removeEventListener("resize", handleResize);
      };

   }, [screenSize]);



   const pathname = usePathname()

   React.useEffect(() => {
      console.log("screeensize", pathname)
   }, [pathname])

   //To Active Button 
   const ActiveMenuButton = () => {
      const ModePhone = document.querySelector('.ModePhone') as HTMLElement
      ModePhone.classList.add('ShowApp')
   }
   const RemoveMenuButton = () => {
      const ModePhone = document.querySelector('.ModePhone') as HTMLElement
      ModePhone.classList.remove('ShowApp')
   }

   return (
      <>
         {screenSize > 788 ?
            <div className='flex items-center justify-around py-5 fixed w-full bg-white z-50' >
               <Image src={Logo} alt='logoPlanify' className='w-[237px] permax3:w-[190px]' loading="lazy" />
               <div className='flex  justify-around items-center  w-[60%] '>
                  {
                     NavbarreLinks.map((item, index) => (
                        <Link key={index} href={item.LinkAddress} className={`testBautton text-[#FF0086] hover:text-[#ff0088e1] pb-2 
                        ${pathname === item.LinkAddress ? "text-[35px] permax3:text-[30px] font-bold  border-b-[1px] border-[#FF0086] " : " text-[27px] permax3:text-[23px]   cursor-pointer  "} `}>
                           {item.LinkName}
                        </Link>
                     ))
                  }
               </div>
               <MagneticButton LinkTo='/' className='bg-[#FFDAED]  text-[#FF0086] w-[194px] h-[56px] text-[28px] flex items-center 
                        permax3:w-[170px] permax3:h-auto permax3:text-[20px]
                     justify-center font-normal'>
                  Login
               </MagneticButton>
            </div> :
            <>
               <div className='fixed z-20  flex justify-between w-full items-center bg-white'>
                  <Link href="/" className='w-[30%] '>
                     <Image src={Logo} alt='logoPlanify' className='m-1 w-full' loading="lazy" />
                  </Link>
                  <h1 className='cursor-pointer bg-[#FF0086] text-white m-4 rounded-full p-1' onClick={ActiveMenuButton}>
                     <BiMenu className="text-4xl  transition-all transform ease-in-out duration-300" />
                  </h1>
               </div>
               <div className='ModePhone flex justify-center items-center'>
                  <h1 className='fixed right-0 top-0 cursor-pointer bg-[#FF0086]  m-4 rounded-full p-1'  onClick={RemoveMenuButton}>
                     <AiOutlineClose className="text-3xl text-white transition-all transform ease-in-out duration-300" />
                  </h1>
                  <div className='w-[70%] text-center  telphone:w-full'>
                     <Image src={Logo} alt='logoPlanify' className='w-[70%] ml-[15%]' loading="lazy" />

                     {
                        NavbarreLinks.map((element, index) => {
                           return (
                              <Reveal className="w-full text-center">
                                 <MagneticButton key={index + 20} LinkTo={element.LinkAddress}
                                    onClick={RemoveMenuButton}
                                    className='text-white  text-5xl font-bold m-4 permaxMedium:m-0 permaxMedium:my-4 zfolder:text-2xl 
                                  zfolder:my-0 '
                                 >
                                    {element.LinkName}
                                 </MagneticButton>
                              </Reveal>
                           )
                        })
                     }
                     <br />
                     <Reveal className="w-full text-center">
                        <MagneticButton LinkTo='/' className='bg-[#FFDAED]  text-[#FF0086]'>
                           Login
                        </MagneticButton>
                     </Reveal>
                  </div>
               </div>
            </>
         }
      </>
   );
}

export default Navbarre;
