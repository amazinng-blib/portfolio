import React, { useRef } from 'react';
import ContactMe from './ContactMe';
import HeroImage from './HeroImage';
import { Saira_Condensed, Lato } from 'next/font/google';
import { motion as m, useScroll } from 'framer-motion';

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
      className={`${font2.variable} font-wdc3 flex flex-col md:flex-row xl:flex-row 2xl:flex-row  md:justify-between xl:justify-between  w-full md:w-[65%] xl:w-[65%] 2xl:w-[65%] px-3 m-auto flex-wrap relative`}
    >
      <section className="order-2 md:order-1 xl:order-1 md:mt-[2rem] xl:mt-[3rem] 2xl:mt-[3rem] my-3 ">
        <header className="font-bold text-[1.3rem] md:text-[2rem] xl:text-[3rem] 2xl:text-[3rem] tracking-wider text-center md:text-start xl:text-start">
          <p>
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
      </section>
      <section className="md:order-2 xl:order-2 2xl:order-2 order-1">
        <HeroImage />
      </section>
    </m.div>
  );
};

export default HeroText;
