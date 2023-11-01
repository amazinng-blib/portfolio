import React, { useEffect, useState } from 'react';
import { NavDataArray, NavItem } from '../Types';
import { navData } from '../data/navdata';
import { BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Saira_Condensed } from 'next/font/google';
import { motion as m } from 'framer-motion';

const adam = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});

type Props = {};

const Navbar = (props: Props) => {
  const [data, setData] = useState<NavDataArray>([]) as any;

  useEffect(() => {
    setData(navData);
  }, []);

  return (
    <m.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 2, delay: 0.25 }}
      exit={{ opacity: 1 }}
      className=" w-full md:w-[65%] xl:w-[65%] 2xl:w-[65%] m-auto "
    >
      <div className="px-3">
        {data?.length > 0
          ? data?.map((item: NavItem, index: any) => {
              return (
                <div
                  key={index}
                  className="flex items-center md:justify-between xl:justify-between justify-center flex-col md:flex-row xl:flex-row  z-30"
                >
                  <h2
                    className={`${adam.variable} font-wdc2  font-bold tracking-wider text-center md:text-start xl:text:start 2xl:text-start text-[1.5rem] md:bg-inherit xl:bg-inherit 2xl:bg-inherit bg-[#242424] md:w-[14.5rem] xl:w-[20rem] 2xl:w-[20rem] w-full  `}
                  >
                    {item?.name}
                  </h2>
                  <div className="flex gap-4 cursor-pointer bg-[#242424] py-4 md:justify-end xl:justify-end 2xl:justify-end justify-center md:max-w-[20rem] xl:max-w-[20rem] 2xl:max-w-[20rem] w-full pr-2">
                    <span>{item?.icons?.github ? <BsGithub /> : null}</span>
                    <span className="text-[#feda75]">
                      {item?.icons?.instagram ? <BsInstagram /> : null}
                    </span>
                    <span className="text-[#00acee]">
                      {item?.icons?.twitter ? <BsTwitter /> : null}
                    </span>
                    <span className="text-[#25d366]">
                      {item?.icons?.whatsap ? <BsWhatsapp /> : null}
                    </span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </m.div>
  );
};

export default Navbar;
