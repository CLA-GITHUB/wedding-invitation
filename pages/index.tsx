import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import QRCode from "react-qr-code";

const weddingName = "Someone's";

const QRComponent: React.FC = () => {
  return <QRCode size={130} value='https://claa.vercel.app' />;
};
const Home: NextPage = () => {
  return (
    <div className='bg-pink-200 h-screen max-w-screen font-opensans flex justify-center items-center'>
      <Head>
        <title>Welcome to {weddingName} wedding</title>
      </Head>

      <div className='max-w-sm mx-auto bg-green-50 rounded-lg'>
        <div className='flex justify-end p-5'>
          <div className='w-4 h-4 rounded-full bg-lime-600'></div>
        </div>
        <div className='flex flex-col items-center justify-center text-center  p-10'>
          <Image
            src={"/wedding.svg"}
            width='130'
            height='130'
            alt='a wedding svg'
          />
          <p className='text-lg font-semibold tracking-wide my-3'>
            Welcome guest to the {weddingName} wedding.
          </p>
          <p className=''>Have a swell time in this holy matrimony 💍</p>
          <div className='w-full mt-5'>
            <p className='text-right italic'>-coursery couples 👩‍❤️‍👨</p>
          </div>
          <div className='mt-8' />
          <QRComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
