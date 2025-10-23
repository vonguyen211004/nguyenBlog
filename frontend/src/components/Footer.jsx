import React from 'react'
import { footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
            <div className="cursor-pointer text-2xl sm:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300 tracking-tight select-none" >
              <span className="text-stone-500">nguyen</span>
              <span className="text-gray-800">Blog</span>
            </div>
            <p className='max-w-[410px] mt-6'>Đây là nơi bạn có thể nói lên suy nghĩ, chia sẻ điều ý nghĩa và viết ra mọi cảm xúc — không rào cản, không giới hạn.
            </p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5 '>
            {footer_data.map((section, index)=>(
                <div key={index}>
                    <h3 className='font-semibold text-base text-gray-900 md:mb-5 md-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((link, i)=>(
                            <li key={i}>
                                <a href="#" className='hover:underline transition'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        Copyright 2025 @ nguyenBlog - All Right Reserved
      </p>
    </div>

  )
}

export default Footer
