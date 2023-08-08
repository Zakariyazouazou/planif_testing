"use client";
import React from "react";
import { Reveal } from "../Component/Reveal";
import App from "../../assets/AndroidStore.png";
import Ios from "../../assets/AppStore.png";
import { cardContent } from "../data/Constante";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import CountUp from "react-countup";
import { TbClockHour8 } from "react-icons/tb";

interface Props {
  className?: string;
}

const HomeIntro: React.FC<Props> = ({ className }: Props) => {
  const [screenSize, setScreenSize] = React.useState<number>(window.innerWidth);

  // Function to handle window resize events and update the screen size state
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  React.useEffect(() => {
    // Add event listener for window resize
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return (
    <div className={className}>
     
      <div className="flex flex-row flex-wrap w-full items-center permaxMaxAlphaMax:items-start ">
        <div className="w-[40%] permaxLoading1:w-[30%] permax3:w-full permax3:px-3 ">
          <Reveal className="permax3:w-auto ml-2 permax3:ml-0">
            <h1
              className="fontmono text-[80px]  permaxLoading1:text-[45px] permax:text-[58px] permaxMedium:text-[40px] telphone:text-[35px] 
                           zfolder:text-[30px] zfolder:text-center zfolder:w-full font-bold mt-10"
            >
              Slimmer <span className="text-[#FF0086]"> Werjen </span>
            </h1>
          </Reveal>
          <Reveal className="mt-2 ml-2 permax3:ml-0">
            <h1
              className="fontmono text-[60px] permaxMaxAlphaa:text-[40px] permaxMedium:text-[37px] permax:text-[50px] telphone:text-[30px] 
                           zfolder:text-[28px] zfolder:text-center zfolder:w-full"
            >
              Steker <span className="text-[#FF0086]">groeien</span>
            </h1>
          </Reveal>
          <Reveal className="ml-2 permax3:ml-0">
            <h1 className="text-[30px] permaxMaxAlphaa:text-[25px] my-2">
              Voor projectmatig werkende bedrijven die uren van medewerkers op
              projecten plannen en de planning naar een hoger niveau willen
              brengen.
            </h1>
          </Reveal>
          <div className="flex flex-row flex-wrap mt-10 permax:justify-center ">
            <Image
              src={App}
              alt="appImagePlanify"
              className="w-[30%] h-[78px] mr-5 permax:mr-0 telphone:w-[80%]  telphone:h-[60px] telphone:my-4 telphone:mr-0 "
              loading="lazy"
            />
            <Image
              src={Ios}
              alt="appImagePlanify"
              className="w-[30%] h-[78px] telphone:w-[80%]  telphone:h-[60px] telphone:my-4 telphone:mr-0"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-[60%] permaxLoading1:w-[70%] overflow-hidden permax3:w-full permax3:mt-16 permaxMedium:absolute permaxMedium:-z-10 
        permaxMedium:opacity-20 ">
          <Reveal>
            <div className="w-full flex justify-around permaxMaxAlphaa:justify-center mt-2 flex-row flex-wrap permax3:items-center">
              {cardContent.map((item, index) => {
                return (
                  <>
                    <div
                      className={`bounceInBottom`}
                      style={{ animationDelay: `${index * 200}ms` }}
                      key={index + "f"}
                    >
                      {item.card.map((element, index) => {
                        const h: number = element.height;
                        const colors: string = element.color.toString();
                        return (
                          <div
                            key={index + "z"} // Adding a unique key for each rendered element
                            className={`w-[216px] permaxMaxAlphaMax:w-[190px]  permaxMaxAlphaMax:m-[1px] px-1 pt-1 rounded-xl elementjump `}
                            style={{
                              height: screenSize > 1086 ? h : 230,
                              marginTop: element.marginTop,
                              backgroundColor: colors,
                              animationDelay: `${index * 200}ms`,
                            }}
                          >
                            <h1 className="text-white font-bold mb-5 text-[16px]">
                              {element.WhatwePresent}
                            </h1>
                            <div className="flex items-center -space-x-4">
                              {element.Subscribers.map((images, numero) => (
                                <Avatar
                                  key={numero+"a"} // Adding a unique key for each Avatar element
                                  variant="circular"
                                  alt={`user ${numero + 1}`}
                                  className="border-2 border-white hover:z-10 focus:z-10 cursor-pointer"
                                  src={images}
                                />
                              ))}
                            </div>
                            <h1
                              className="ml-3 text-white font-bold flex items-center"
                              style={{
                                marginTop:
                                  screenSize > 1086 ? h - 155 : 230 - 155,
                              }}
                            >
                              <TbClockHour8 className="text-xl mr-1" />
                              {element.firsthour < 10 && "0"}
                              <CountUp end={element.firsthour} duration={20} />:
                              {element.firsthourMinute < 10 && "0"}
                              <CountUp
                                end={element.firsthourMinute}
                                duration={20}
                              />
                              -{element.Finishhour < 10 && "0"}
                              <CountUp end={element.Finishhour} duration={20} />
                              :{element.FinishhourMinute < 10 && "0"}
                              <CountUp
                                end={element.FinishhourMinute}
                                duration={20}
                              />
                            </h1>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
