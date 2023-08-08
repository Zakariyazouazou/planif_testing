"use client";
import React from 'react';
import dynamic from "next/dynamic";
import Loading from '../../Component/Loading';
const OverIntro = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverIntro),
  { loading: () => <Loading/> }
);

const OverManager = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverManager),
  { loading: () => <Loading/> }
);

const OverOffers = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverOffers),
  { loading: () => <Loading/> }
);

const OverServices = dynamic(
  () => import('../../Sections/index').then((mod) => mod.OverServices),
  { loading: () => <Loading/> }
);


interface Props {
   className?: string;
}

const page: React.FC<Props> = ({className}:Props) => {
  return (
    <div className={className}>
           <OverIntro className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 '/>
           <OverServices className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28 '/>
           <OverOffers className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28 '/>
           <OverManager className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28 '/>
    </div>
  );
}

export default page;
