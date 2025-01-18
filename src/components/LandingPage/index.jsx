import React from 'react'
import Image from 'next/image'
import { SquareChevronRight } from 'lucide-react';
import { CircleChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className=' p-4 md:px-20 md:py-10 w-full flex flex-col gap-5'>
      <Image className='' src={"/homepage.svg"} alt='Error' width={"300"} height={"100"} />
      <div className='flex flex-col gap-5'>
        <div className=' text-3xl md:text-7xl font-bold'>An all-in-one frontend solution crafted for aspiring developers</div>
        <div className='text-xl opacity-90 md:w-[50%]'>DevUIx is a comprehensive and easy-to-use open-source UI templates library ( powered by TailwindCSS) designed to enhance your productivity as a learner</div>
      </div>
      <div className='flex gap-5 max-sm:mt-10'>
        <button className='p-4 flex gap-3 items-center font-bold md:text-xl rounded-lg border-white bg-white text-gray-900'>
          <SquareChevronRight className='' /> Components</button>
        <button className='p-4 flex gap-3 items-center font-bold md:text-xl rounded-lg border-white bg-white text-gray-900'>
          <SquareChevronRight className='' /> Contribute</button>
      </div>
    </div>
  )
}

export default LandingPage
