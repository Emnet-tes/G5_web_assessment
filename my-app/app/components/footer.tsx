import React from "react";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="space-y-5">
      <div className="border-y flex gap-2 p-5 space-x-5 ">
        <Image src="/rafiki.png" width={300} height={230} alt="logo" />
        <div className="flex-col w-1/5 mt-10 space-y-5 items-center">
          <h4 className="font-semibold text-lg">
            Get involved in improving tech education in Africa!n
          </h4>
          <button
            className="bg-blue-700 text-white px-11
           py-2 rounded-lg"
          >
            support us
          </button>
        </div>
        <div className=" w-1/5 flex-col space-y-5">
          <p className="font-semibold">Links</p>
          <p className="font-light">Success story</p>
          <p className="font-light">about us</p>
          <p className="font-light">Home</p>
          <p className="font-light">get involved</p>
        </div>
        <div className=" w-1/5 flex-col space-y-5">
          <p className="font-semibold">Teams</p>
          <p className="font-light">Board Members</p>
          <p className="font-light">Advisors/Mentors</p>
          <p className="font-light">Executives</p>
          <p className="font-light">get Staffs</p>
        </div>
        <div className=" w-1/5 flex-col space-y-5">
          <p className="font-semibold">Blogs</p>
          <p className="font-light">Recent Blogs</p>
          <p className="font-light">New Blog</p>
        
        </div>
      </div>
      <div className="justify-between text-gray-400 flex">
        <div>@ 2020 Africa to Silicon Valley, Inc. All right reserved.</div>
        <div className="space-x-2">
          <button>twiter</button>
          <button>facebook</button>
          <button>youtube</button>
          <button>linkdeen</button>
          <button>insta</button>
        </div>
      </div>
    </div>
  );
};
