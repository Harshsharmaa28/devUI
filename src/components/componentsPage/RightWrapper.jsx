import React from 'react'
import { ComponentsList } from '@/utils'





const RightWrapper = ({selectedKey}) => {
  const selectedComponent = ComponentsList.find(
    (item) => item.input === selectedKey
  );
  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
      {/* <div className=' text-gray-800 bg-white w-[100%] h-10'>
        Hello
      </div> */}
      {selectedComponent.element}
    </div>
  )
}

export default RightWrapper
