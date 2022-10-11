import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import QRCode from "react-qr-code";
import { useRouter } from "next/router";

const weddingName = "Someone's";
const invites = ["Livingstone", "Holla"];

interface QRProps {
  guest: string;
}

const QRComponent: React.FC<QRProps> = ({ guest }) => {
  const uri =
    process.env.NODE_ENV === "production"
      ? "https://my-wedding-invites.vercel.app/guests/"
      : "http://localhost:3000/";

  let url = uri + guest;

  return <QRCode size={130} value={url} />;
};

const Guest: NextPage = () => {
  const router = useRouter();
  const { guest } = router.query;

  const present = invites.filter(
    (itm) => itm.toLowerCase() === guest?.toString().toLowerCase()
  );
  if (guest && present.length === 0) {
    return (
      <div className='h-screen w-screen flex justify-center items-center bg-pink-300'>
        <div className='max-w-sm mx-auto p-8 '>
          <div className='flex justify-center'>
            <Image
              src={"/notFound.svg"}
              width='150'
              height='150'
              alt='a wedding svg'
            />
          </div>

          <p className='font-semibold text-xl text-center text-gray-700'>
            Oops sorry, your name was not found on the wedding list!
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className='bg-pink-200 px-5 h-screen max-w-screen font-opensans flex justify-center items-center'>
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
            Welcome <span className='capitalize'>{guest}</span> to the{" "}
            {weddingName} wedding.
          </p>
          <p className=''>Have a swell time in this holy matrimony 💍</p>
          <div className='w-full mt-5'>
            <p className='text-right italic'>-coursery couples 👩‍❤️‍👨</p>
          </div>
          <div className='mt-8' />
          {guest !== undefined && typeof guest == "string" && (
            <QRComponent guest={guest as string} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Guest;
