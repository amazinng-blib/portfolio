'use client';

import React, { useState, useRef } from 'react';
import { Saira_Condensed } from 'next/font/google';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import { Loader } from '../loader';

const adam = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oswald',
});

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const obj = {
        name,
        email,
        message,
      };
      setLoading(true);

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
        Authorization: `Bearer EKzntpy6uFcJKw497j5fZ0ae`,
      };
      const response = await fetch(
        // 'https://nodemailer-email-sender.onrender.com/send-mail',
        'https://nodemailer-email-sender-jyqbqaha1-amazinng-blib.vercel.app/send-mail',
        requestOptions
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data) {
        setLoading(false);
        setName('');
        setEmail('');
        setMessage('');
        setInfo(data?.message || 'Message Sent');

        let timeout = setTimeout(() => {
          setInfo('');
        }, 2000);

        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  return (
    <m.div
      ref={ref}
      style={{
        // scale: scale,
        opacity: opacity,
      }}
      className="bg-[#242424] py-10"
      id="#contact"
    >
      <div
        className={`${adam.variable}  font-wdc2 w-full md:w-[65%] xl:w-[65%] 2xl:w-[65%] px-3 m-auto  tracking-wider flex lg:justify-between justify-center flex-wrap gap-4 `}
      >
        <section className="w-full md:w-[30rem]  text-center">
          <h3 className={`text-[1rem] md:text-[3rem]`}>Contact</h3>
          <p>
            I would love to hear about your project and how i <br /> could help.
            Please fill-in the form, and i&apos;ll get back <br /> to you as
            soon as possible
          </p>
        </section>
        <section className="w-full md:w-[30rem] ">
          {info ? info : null}
          {loading ? <Loader variant="circular" /> : null}
          <form onSubmit={handleSubmit}>
            <div className="my-4 w-full">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="NAME"
                className="border-b border-[#cacaca] bg-[#242424] focus:outline-none w-full text-[#fff] md:p-3 p-2 capitalize tracking-widest "
              />
            </div>
            <div className="my-4 w-full">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="EMAIL"
                className="border-b border-[#cacaca] bg-[#242424] focus:outline-none w-full text-[#fff] md:p-3 p-2 tracking-widest "
              />
            </div>
            <div className="w-full ">
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="MESSAGE"
                className="border-b border-[#cacaca] bg-inherit focus:outline-none w-full h-[10rem] p-3 text-[#fff] tracking-widest capitalize "
              ></textarea>
            </div>
            <div className="text-end my-2 ">
              <button
                type="submit"
                className="uppercase  border-b-2 border-[#7bc5a5]"
              >
                send message
              </button>
            </div>
          </form>
        </section>
      </div>
    </m.div>
  );
};

export default ContactForm;
