'use client';

import React, { useEffect, useState, useRef } from 'react';
import ContactMe from './ContactMe';
import { ProjectArray, ProjectItems } from '../Types';
import { projectsData } from '../data/navdata';
import Image from 'next/image';
import { Inconsolata, Saira_Condensed } from 'next/font/google';
import { GoLinkExternal } from 'react-icons/go';
import { motion as m, useScroll, useTransform } from 'framer-motion';
const sawarabi = Inconsolata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sara',
});

const adam = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});

type Props = {};

const Projects = (props: Props) => {
  const [data, setData] = useState<ProjectArray>([]);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    setData(projectsData);
  }, []);
  return (
    <m.div
      // ref={ref}
      // style={{
      //   // scale: scale,
      //   opacity: opacity,
      // }}
      className="w-full max-w-[1100px]   px-2 m-auto mt-[1rem] tracking-wider"
    >
      <div className="flex justify-center gap-4 items-center">
        <header
          className={` ${adam.variable} font-wdc2 text-[1.2rem] md:text-[2rem]  font-bold  text-[#b7b7b7] uppercase border-b max-w-max m-auto`}
        >
          <h2>Projects</h2>
        </header>

        {/* <ContactMe /> */}
      </div>

      {/* display projects */}
      <div className="flex justify-center xl:gap-[2rem] gap-4 flex-wrap transition-all duration-1000 ease-in-out">
        {data?.length > 0
          ? data?.map((item: ProjectItems, index: any) => {
              return (
                <div
                  key={index}
                  className="w-full md:w-[40rem]  2xl:w-[48%]  my-4   bg-[#968787] p-3 rounded-xl  "
                >
                  {/* <div className="w-[100%] "> */}
                  <img
                    src={item?.image}
                    alt={item?.heading}
                    className=" object-contain   w-full lg:h-[20rem] "
                  />
                  {/* </div> */}

                  <div className="flex gap-2 flex-wrap text-[#f5f3f3]">
                    {item?.language?.map((d, index) => {
                      return (
                        <div
                          key={index}
                          className=" uppercase  text-[.8rem] mt-3"
                        >
                          <span>{d}</span>
                        </div>
                      );
                    })}
                  </div>
                  <h4
                    className={`${sawarabi.variable} font-wdc uppercase  text-[1rem] md:text-[1rem]  font-bold mb-4 my-2 text-[#fff] flex items-center justify-between`}
                  >
                    {item?.heading}{' '}
                    <a
                      href={item?.link}
                      target="_blank"
                      className="capitalize flex items-center gap-2 text-[.9rem] cursor-pointer "
                    >
                      <GoLinkExternal /> visit
                    </a>
                  </h4>
                </div>
              );
            })
          : null}
      </div>
    </m.div>
  );
};

export default Projects;
