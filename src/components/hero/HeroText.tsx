import React, { useRef } from 'react';
import ContactMe from './ContactMe';
import HeroImage from './HeroImage';
import { Saira_Condensed, Lato } from 'next/font/google';
import { motion as m, useScroll } from 'framer-motion';
import DownloadCv from './DownloadCv';

const adam = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});

const font2 = Lato({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lato',
});

type Props = {};

const HeroText = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  return (
    <m.div
      // ref={ref}
      // style={{
      //   // scale: scrollYProgress,
      //   opacity: scrollYProgress,
      // }}
      className={`grid grid-cols-2 gap-6 mb-4`}
    >
      <section className="order-2 md:order-1 xl:order-1 md:mt-[2rem] xl:mt-[3rem] 2xl:mt-[3rem] my-3 px-3 flex flex-col justify-center">
        <header className="font-bold text-[1.3rem] md:text-[2rem] xl:text-[3rem] 2xl:text-[3rem] tracking-wider text-center md:text-start xl:text-start">
          <p className="gradient-title">
            Nice to Meet you!
            <br /> I&apos;m Nwankwo Ernest
            <br /> Onyebuchi.
          </p>
        </header>
        <section className=" my-4">
          <p className="text-[1rem] text-[#a8a8a8]">
            Full Stack web developer, Based in Nigeria <br /> passionate about
            building accessible web apps that users love
          </p>
        </section>
        {/* <ContactMe /> */}
        <DownloadCv />
      </section>
      <HeroImage />
    </m.div>
  );
};

export default HeroText;
{
  /* <section className="md:order-2 xl:order-2 2xl:order-2 order-1 bg-[#242424] "> */
}

{
  /* </section> */
}
//p-2 md:w-[20rem] xl:w-[20rem] 2xl:w-[20rem]
