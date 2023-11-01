'use client';

import React, { useEffect, useRef } from 'react';
import HeroText from './HeroText';
import Skills from './Skills';
import Projects from './Projects';
import ContactForm from './ContactForm';
import { motion as m } from 'framer-motion';
import Experience from './Experience';
import { Header } from '../Head';

type Props = {};

const HeroIndex = (props: Props) => {
  return (
    <div>
      <m.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="vissible"
        transition={{ duration: 2, delay: 0.25 }}
      >
        <Header />
        <HeroText />
        <Skills />
        <Projects />
        <Experience />
        <ContactForm />
      </m.div>
    </div>
  );
};

export default HeroIndex;
