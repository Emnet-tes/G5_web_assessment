import Image from 'next/image';
import React from 'react'

export const Blog = () => {
  return (
    <div className="p-24">
      {/* title part */}
      <div>
        <h4 className="font-IM FELL French Canon font-normal text-[48px]">
          The essential guide to Competitive Programming
        </h4>
        <p className="text-center font-Montserrat font-light text-[16px]">
          Programming, tech | 6 min Read
        </p>
      </div>
      <Image src="" width={500} height={300} alt="logo" />
    </div>
  );
}


export interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: string | null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}