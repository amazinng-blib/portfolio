'use client';
import React, { useEffect, useState, useRef } from 'react';
import { SkillsArray, SkillsItem } from '../Types';
import { skillsData } from '../data/navdata';
import { Saira_Condensed } from 'next/font/google';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const adam = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});

type Props = {};

const Skills = (props: Props) => {
  const [data, setData] = useState<SkillsArray>([]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    setData(skillsData);
  }, []);
  return (
    <m.div
      // ref={ref}
      // style={{
      //   scale: scale,
      //   opacity: opacity,

      // }}
      className={` ${adam.variable} font-wdc2 w-full max-w-[1300px] m-auto md:w-[1000px]   mt-[2rem] px-1 tracking-wider `}
    >
      <hr />
      <h2
        className={` ${adam.variable} font-wdc2 text-[1rem] md:text-[2rem] mt-2 font-bold text-[#b7b7b7] uppercase   `}
      >
        Skills
      </h2>

      <div className="flex justify-between gap-2 flex-wrap mt-6">
        {data?.length > 0
          ? data?.map((item: SkillsItem, index: any) => {
              return (
                <div key={index} className=" mb-4 px-2">
                  <div className="flex justify-center flex-col items-center">
                    <p className="text-[1rem] md:text-[1.3rem]  font-bold">
                      {item?.skill}
                    </p>
                    <p className="text-[#9c9c9c]">
                      {item?.years} Years Experience
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </m.div>
  );
};

export default Skills;
