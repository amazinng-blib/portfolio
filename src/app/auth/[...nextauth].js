import React from 'react';
import NextAuth from 'next-auth/next';

import GoogleProvider from 'next-auth/providers/google';

export default NextAuth = () => {
  Providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ];
};
