"use client";
import React from 'react';
import dynamic from "next/dynamic";
import Loading from '../../Component/Loading';
const OverIntro = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverIntro),
  { loading: () => <Loading/> , ssr: false }
);

const OverManager = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverManager),
  { loading: () => <Loading/> , ssr: false }
);

const OverOffers = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverOffers),
  { loading: () => <Loading/> , ssr: false }
);

const OverServices = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverServices),
  { loading: () => <Loading/> , ssr: false }
);


interface Props {
}

const page: React.FC<Props> = (props) => {
  return (
    <div>
           <OverIntro className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 '/>
           <OverServices className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28 '/>
           <OverOffers className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28 '/>
           <OverManager className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28 '/>
    </div>
  );
}

export default page;
