import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between px-32 py-6 bg-gray-900 border-b border-gray-500'>
      <div>
        <span className='text-3xl font-extrabold hover:cursor-pointer'>DevUIx</span>
      </div>
      <div className=''>
        <ul className='flex gap-10 font-semibold text-lg'>
            <li className=' hover:cursor-pointer'>Home</li>
            <Link href={'/components'} className=' hover:cursor-pointer'>Components</Link>
            <Link href={'/about-us'} className=' hover:cursor-pointer'>About Us</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
