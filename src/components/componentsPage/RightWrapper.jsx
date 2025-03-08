import React from 'react'
import { ComponentsList } from '@/utils'
import PreviewNavBar from '../shared/Preview-bar';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';






const RightWrapper = ({ selectedKey }) => {
  const selectedComponent = ComponentsList.find(
    (item) => item.input === selectedKey
  );
  return (
    <div className='flex flex-col justify-start h-[100%] items-center w-[100%]'>
      {selectedKey != "Introduction" && <PreviewNavBar />}
      <div className='mt-4'>
        {selectedKey!="Introduction" && <ArrowUpLeft className=' hover:cursor-pointer text-gray-900 absolute'/>}
        {selectedComponent.element}
      </div>
    </div>
  )
}

export default RightWrapper
