import Image from 'next/image';
import React from 'react';
// import { Ernest, Logo } from '../../../public/image';

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className="bg-[#242424]   md:w-[20rem] xl:w-[20rem] 2xl:w-[20rem] px-4 m-auto">
      <Image
        src={'/image/ernest-pics.jpg'}
        alt="place holder logo"
        width={100}
        height={100}
        layout="responsive"
        className="fill-blue-500 object-cover w-full"
      />
    </div>
  );
};

export default HeroImage;
