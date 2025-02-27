import Image from 'next/image';
import React from 'react';
// import { Ernest, Logo } from '../../../public/image';

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className=" md:order-2 xl:order-2 2xl:order-2 order-1 w-full ">
      <Image
        src={'/image/ernest-pics.jpg'}
        alt="place holder logo"
        width={400}
        height={300}
        className="rounded-full"
      />
    </div>
  );
};

export default HeroImage;
