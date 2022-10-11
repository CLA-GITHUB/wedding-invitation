import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import QRCode from "react-qr-code";

const weddingName = "Someone's";

const Home: NextPage = () => {
  return (
    <div className='bg-pink-200 h-screen max-w-screen font-opensans flex justify-center items-center'>
      <Head>
        <title>Welcome to {weddingName} wedding</title>
      </Head>

      <div className='max-w-sm mx-auto bg-green-50 rounded-lg'>
        <div className='flex flex-col items-center justify-center text-center  p-10'>
          <Image
            src={"/wedding.svg"}
            width='130'
            height='130'
            alt='a wedding svg'
          />
          <p className='text-lg font-semibold tracking-wide my-3'>
            Welcome to {weddingName} wedding.
          </p>
          <p className=''>Have a swell time in this holy matrimony 💍</p>
          <div className='w-full mt-5'>
            <p className='text-right italic'>-coursery couples 👩‍❤️‍👨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
