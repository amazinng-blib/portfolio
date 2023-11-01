'use client';
import React from 'react';
import HeroIndex from '@/components/hero/HeroIndex';
import Head from 'next/head';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      {/* <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
      </Head> */}
      <HeroIndex />
    </>
  );
};

export default page;
