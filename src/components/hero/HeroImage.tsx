import Image from 'next/image';
import React from 'react';
import { Ernest, Logo } from '../image';

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className="bg-[#242424]   md:w-[20rem] xl:w-[20rem] 2xl:w-[20rem] px-4 m-auto">
      <Image
        src={Ernest}
        alt="place holder logo"
        className="fill-blue-500 object-cover"
      />
    </div>
  );
};

export default HeroImage;
