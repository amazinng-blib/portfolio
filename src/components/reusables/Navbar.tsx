import React, { useEffect, useState } from 'react';
import { NavDataArray, NavItem } from '../Types';
import { navData } from '../data/navdata';
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';
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
      className="flex justify-end mb-8  py-6"
    >
      <div className="">
        {data?.length > 0
          ? data?.map((item: NavItem, index: any) => {
              return (
                <div
                  key={index}
                  className="flex items-center md:justify-between xl:justify-between justify-center flex-col md:flex-row xl:flex-row  z-30"
                >
                  <div className="flex gap-4 cursor-pointer  py-4 md:justify-end xl:justify-end 2xl:justify-end justify-center  w-full pr-2 md:w-[20rem] xl:w-[20rem] 2xl:w-[20rem]">
                    <a href="https://github.com/amazinng-blib" target="_blank">
                      {item?.icons?.github ? <BsGithub size={20} /> : null}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ernestnwankwo/"
                      target="_blank"
                      className="text-[#feda75]"
                    >
                      {item?.icons?.linkedIn ? <BsLinkedin size={20} /> : null}
                    </a>
                    <a
                      href="https://twitter.com/NwankwoErnestO2"
                      target="_blank"
                      className="text-[#00acee]"
                    >
                      {item?.icons?.twitter ? <BsTwitter size={20} /> : null}
                    </a>
                    <a
                      href="https://wa.me/+2347061847132"
                      target="_blank"
                      className="text-[#25d366]"
                    >
                      {item?.icons?.whatsap ? <BsWhatsapp size={20} /> : null}
                    </a>
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
