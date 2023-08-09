"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loading from "./Component/Loading";
//Import All Sections
const HomeIntro = dynamic(
  () => import("./Sections").then((mod) => mod.HomeIntro),
  { loading: () => <Loading/>, ssr: false }
);
const HomeOffer = dynamic(
  () => import("./Sections").then((mod) => mod.HomeOffer),
  { loading: () => <Loading/>, ssr: false }
);
const HomePrises = dynamic(
  () => import("./Sections").then((mod) => mod.HomePrises),
  { loading: () => <Loading/>, ssr: false }
);
const HomeInter = dynamic(
  () => import("./Sections").then((mod) => mod.HomeInter),
  { loading: () => <Loading/>, ssr: false }
);
const HomeReview = dynamic(
  () => import("./Sections").then((mod) => mod.HomeReview),
  { loading: () => <Loading/>, ssr: false }
);

export default function Home() {
  const [screenSize, setScreenSize] = React.useState<Number>(window.innerWidth);

  React.useEffect(() => {
    const CheckScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", CheckScreenSize);
    CheckScreenSize();
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", CheckScreenSize);
    };
  }, []);

  return (
    <main className="w-full ">
      <HomeIntro className="w-[90%] ml-[5%] permaxLoading1:w-full permaxLoading1:ml-0" />
      <HomeOffer className="w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-32 " />
      <HomePrises
        className="w-full bg-Move-grad  my-10 mt-32 "
        screenSize={screenSize}
      />
      <div className="pt-48 permax-xs:pt-72" />
      <HomeInter className="w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-32  " />
      <HomeReview
        className="w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-32 "
        screenSize={screenSize}
      />
    </main>
  );
}
