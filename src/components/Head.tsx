import React from 'react';
import Head from 'next/head';
type Props = {};

export const Header = (props: Props) => {
  return (
    <Head>
      <title>Home Page</title>
      <meta
        name="description"
        content="This is the home page of our website."
      />
    </Head>
  );
};
