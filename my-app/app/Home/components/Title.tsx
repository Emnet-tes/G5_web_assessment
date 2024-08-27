import React from 'react'

export const Title = () => {
  return (
    <div className='flex justify-between w-[70%]'>
         <div className='font-semibold text-[32px]'>Blogs</div>
         <div className='space-x-5'>
            <input type="text" placeholder='Search...' className='border border-gray-300 rounded-3xl p-2' />
            <button className='bg-blue-700 rounded-3xl p-2 text-white px-5'>+ New blog</button>
         </div>
    </div>
   
  )
}
