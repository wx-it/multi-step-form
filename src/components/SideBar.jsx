import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-sidebar h-40 w-full'>
  <div className='flex justify-center pt-10 space-x-3'>
  <div>
    <span 
    className='border-white border-2 rounded-full py-2 px-3.5 text-white text-bold text-sm'
    >1</span>
  </div>
  
  <div>
    <span
        className='border-white border-2 rounded-full py-2 px-3.5 text-white text-bold text-sm'
    >2</span>
  </div>
  
  <div>
    <span
        className='border-white border-2 rounded-full py-2 px-3.5 text-white text-bold text-sm'
    >3</span>
  </div>
  
  <div>
    <span
        className='border-white border-2 rounded-full py-2 px-3.5 text-white text-bold text-sm'
    >4</span>
  </div>
  </div>
</div>
  )
}

export default SideBar