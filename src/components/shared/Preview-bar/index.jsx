import { Code, Eye } from 'lucide-react'
import React from 'react'

const PreviewNavBar = () => {
  return (
    <div className=' shadow-lg bg-blue-50 text-gray-800 items-center w-[100%] px-8 py-4 flex justify-between'>
        <span className='px-3 py-2 font-semibold'>Login Page</span>
        <div className="flex">
            <span className=' flex gap-2 rounded-lg rounded-r-none font-medium border-gray-100 border-r-0 border bg-gray-600 text-gray-100 px-3 hover:bg-gray-500 hover:cursor-pointer py-2'>
                <Eye/>
                Preview</span>
            <span className=' flex gap-2 rounded-lg rounded-l-none font-medium border-gray-100 border-l-1 border bg-gray-600 text-gray-100 px-3 hover:bg-gray-500 hover:cursor-pointer py-2'>
                <Code/>
                Code</span>
        </div>
    </div>
  )
}

export default PreviewNavBar
