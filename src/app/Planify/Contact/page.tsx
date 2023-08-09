"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../Component/Loading';
const ContactMethode = dynamic(
  () => import('../../Sections/index').then((mod) => mod.ContactMethode),
  { loading: () => <Loading/>, ssr: false }
);

const ContactQuestion = dynamic(
  () => import('../../Sections/index').then((mod) => mod.ContactQuestion),
  { loading: () => <Loading/>  , ssr: false}
);




interface Props {

}


const page: React.FC<Props> = (props) => {
  return (
    <div>
          <ContactMethode className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10'/>
          <ContactQuestion className='w-[90%] ml-[5%] permax:w-full permax:ml-0 my-10 mt-28'/>

    </div>
  );
}

export default page;
