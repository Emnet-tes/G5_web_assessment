import React from "react";
import Image from "next/image";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  skills: string[];
}

export const Card = ({ image, description, skills, title }: Props) => {
  return (
    <div className="border-t space-y-6 p-6 bg-white ">
 
      <div className="flex items-center space-x-4">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="profile"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">Yideye Tebeje</h2>
          <p className="text-sm text-gray-500">
            Software Engineer • Apr 16, 2022
          </p>
        </div>
      </div>


      <div className="flex">
        <div className="w-[65%] space-y-3">
          <h3 className="font-bold text-xl text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="w-[35%] pl-4">
          <Image
            src={image}
            width={500}
            height={300}
            alt="content"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

  
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm shadow-sm hover:bg-gray-200 transition"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};
