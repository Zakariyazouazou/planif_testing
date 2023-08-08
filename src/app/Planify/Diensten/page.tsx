"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../Component/Loading';
const DiensenIntro = dynamic(
  () => import('../../Sections/index').then((mod) => mod.DiensenIntro),
  { loading: () => <Loading/> }
);

const DiensenReview = dynamic(
  () => import('../../Sections/index').then((mod) => mod.DiensenReview),
  { loading: () => <Loading/> }
);

const DiensenOther = dynamic(
  () => import('../../Sections/index').then((mod) => mod.DiensenOther),
  { loading: () => <Loading/> }
);

const DiensenServices = dynamic(
  () => import('../../Sections/index').then((mod) => mod.DiensenServices),
  { loading: () => <Loading/> }
);
interface Props {

}

const page: React.FC<Props> = (props) => {
  return (
    <div>
         <DiensenIntro className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10' />
         <DiensenServices className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-10' />
         <DiensenOther className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28' />
         <DiensenReview className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28' />
    </div>
  );
}

export default page;
