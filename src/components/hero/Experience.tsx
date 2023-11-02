import React, { useState, useRef, useEffect } from 'react';
import { Saira_Condensed, Lato } from 'next/font/google';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import { ExperienceInterface, ExperienceType, RoleInterface } from '../Types';
import { experince } from '../data/navdata';
import { BiLink } from 'react-icons/bi';

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

const Experience = (props: Props) => {
  const [data, setData] = useState<ExperienceType>([]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    setData(experince);
  }, []);
  return (
    <m.div
      // ref={ref}
      // style={{
      //   // scale: scale,
      //   opacity: opacity,
      // }}
      className={`  w-full max-w-[1300px] m-auto  tracking-wider px-3 `}
    >
      <h2
        className={` ${adam.variable} font-wdc2 text-[1.2rem] md:text-[2rem]  font-bold  text-[#b7b7b7] text-center border-b  max-w-max m-auto uppercase`}
      >
        Experiences
      </h2>

      <section>
        {data?.map((x: ExperienceInterface, index: any) => {
          return (
            <div key={index} className="my-5">
              <div className="flex lg:items-center items-start gap-2 tracking-wider lg:text-[1.2rem]  text-[1rem] uppercase text-[#fff]">
                <BiLink /> <span>{x?.company}</span>
              </div>
              <p className="my-2 text-[#fff] tracking-wider text-[1rem] md:text-[1.2rem] uppercase">
                {x?.worked_as}
              </p>

              {x?.role?.map((item: RoleInterface, i: any) => {
                return (
                  <ul key={i} className="my-2 py-1">
                    <li
                      className={`  text-[#b7b7b7]   text-[1rem] tracking-wide`}
                    >
                      {item?.role}
                    </li>
                  </ul>
                );
              })}

              {/* <p className={`  font-wdc3  tracking-wider my-6`}>
                <span className="font-medium uppercase text-[1.1rem] text-[#b7b7b7]">
                  {' '}
                  Technology Used:{' '}
                </span>{' '}
                <span> {x?.language} </span>
              </p> */}
            </div>
          );
        })}
      </section>
    </m.div>
  );
};

export default Experience;
