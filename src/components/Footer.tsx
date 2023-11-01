import React, { useEffect, useState } from 'react';
import { BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Saira_Condensed } from 'next/font/google';
import { navData } from './data/navdata';
import { NavDataArray, NavItem } from './Types';

const adam = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});

type Props = {};

const Footer = (props: Props) => {
  const [data, setData] = useState<NavDataArray>([]) as any;
  const date = new Date().getFullYear();

  useEffect(() => {
    setData(navData);
  }, []);
  return (
    <div className="bg-[#242424] py-10">
      <div className=" w-full md:w-[65%] xl:w-[65%] 2xl:w-[65%] m-auto ">
        <hr />
        <div className="px-3">
          {data?.length > 0
            ? data?.map((item: NavItem, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex items-center md:justify-between xl:justify-between justify-center flex-col md:flex-row xl:flex-row  z-30"
                  >
                    <h2
                      className={`${adam.variable} font-wdc2  font-bold tracking-wider text-center md:text-start xl:text:start 2xl:text-start text-[1.5rem]  md:w-[20rem] xl:w-[20rem] 2xl:w-[20rem] w-[90%]`}
                    >
                      {item?.name}
                    </h2>
                    <div className="flex gap-4 cursor-pointer  py-4 md:justify-end xl:justify-end 2xl:justify-end justify-center md:max-w-[20rem] xl:max-w-[20rem] 2xl:max-w-[20rem] w-[90%] pr-2">
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
        <p className="text-center mt-2">
          &copy; Nwankwo Ernest Onyebuchi {date}
        </p>
      </div>
    </div>
  );
};

export default Footer;
