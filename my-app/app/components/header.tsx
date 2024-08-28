import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Header = () => {
  return (
  
      <div className='flex  justify-between'>
        <Image src="/logo.png" width={50} height={30} alt="logo" />
        <div className='flex space-x-5'>
          <Link href="/.">Home</Link>
          <p>Teams</p>
          <p>success story</p>
          <p>about us</p>
          <Link href="/blog"></Link>
          <p>Get Involved</p>
        </div>
        <div className='space-x-3'>
          <button className='hover:bg-blue-500 hover:text-white '>log in</button>
          <button className='hover:bg-blue-500 hover:text-white'>donate</button>
        </div>
      </div>
  
  );
}
