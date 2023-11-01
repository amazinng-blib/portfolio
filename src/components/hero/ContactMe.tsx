'use client';

import React from 'react';

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="mt-[1.5rem] text-center md:text-start xl:text-start 2xl:text-start">
      <a href="#contact">
        <button
          type="button"
          className="uppercase border-b-2 border-[#7bc5a5] md:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] text-[.7rem] "
        >
          {' '}
          Contact Me
        </button>
      </a>
    </div>
  );
};

export default ContactMe;
