'use client';
import React from 'react';
import Navbar from './reusables/Navbar';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Wraper = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">{children}</div>

      <Footer />
    </>
  );
};

export default Wraper;
