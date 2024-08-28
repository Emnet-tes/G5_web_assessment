import { inter } from '@/app/layout';
import Image from 'next/image';
import React from 'react'
import { Card } from './card';

const data = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];
export const Blog = () => {
  return (
    <div className="py-24 px-32 space-y-5 items-center">
      {/* title part */}
      <div className="text-center ">
        <h4 className={`font-normal text-[32px]  font-serif`}>
          The essential guide to Competitive Programming
        </h4>
        <p className="text-center font-Montserrat font-light text-[16px]">
          Programming, tech | 6 min Read
        </p>
      </div>
      <Image
        src="/Rectangle.png"
        width={1500}
        height={700}
        alt="logo"
        className="rounded-none"
      />
      <div className="flex flex-col justify-center items-center text-center space-y-2">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="profile"
          className="rounded-full"
        />
        <h4 className="font-medium">Chaltu Kebede | Software Engineer</h4>
        <h4 className="text-gray-500">@chaltu_kebede</h4>
      </div>

      <div className="px-20 space-y-5">
        <p className="font-serif font-normal">
          We know that data structure and algorithm can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </p>
        {data.map((item, index) => (
          <p key={index} className="font-sans text-gray-400">{item}</p>
        ))}
      </div>
      <h4 className="font-semibold font-sans text-lg">Related Blogs</h4>
      <div className='flex gap-16'><Card />
      <Card />
      <Card /></div>
      
    </div>
  );
}


