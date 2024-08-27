import React from 'react'
import Image from 'next/image';
export const Card = () => {
  return (
    <div className="flex-col w-96  text-gray-500 shadow-lg ">
      <Image
        src="/Image.png"
        width={470}
        height={320}
        alt="profile"
        className=""
      />
      <div className="flex-col p-2 space-y-5">
        <h4 className="font-medium text-lg">
          Design Liberalized Exchange Rate Management
        </h4>
        <div className="space-x-5">
          <button className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-200 transition">
            UI/UX
          </button>
          <button className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-200 transition">
            Development
          </button>
        </div>
        <h4 className="font-light text-base">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </h4>
      </div>
    </div>
  );
}
