import { Link } from "react-router-dom"

const Step1 = ({changeNumColor, handleChangeName, name, email, handleChange, error, nameError, handleChangeNumber, numberError, number}) => {


  return (
    <div className="md:space-y-16">
   <div className='bg-White py-8 px-6 rounded-lg shadow-xl md:shadow-none'>
   <div className="md:space-y-4">
        <h1
        className='text-Marine-blue text-xl font-bold md:text-xxl'
        >Personal info</h1>
         <p
         className="text-Cool-gray w-72 my-1 md:w-auto"
         >Please provide your name, email address, and phone number.</p>
    </div>
  <div className="flex flex-col my-5 md:mt-8">
  <label
   htmlFor=""
   className='text-sm font-medium text-Marine-blue md:text-ms md:font-normal '
   >Name</label>
  <input
   name="name"
   onChange={handleChangeName}
   value={name}
   type="text" 
   placeholder='e.g. Stephen King'
   className='border border-Light-gray py-2 px-3 pl-5 font-normal rounded text-Cool-gray md:py-3 md:rounded-lg md:focus:outline-Purplish-blue md:cursor-pointer focus:outline-none'
   />
    {nameError && <p className="text-Strawberry-red text-sm font-medium">{nameError}</p>}

  </div>
  <div className='flex flex-col my-5'>
    
  <label
   htmlFor=""
   className='text-sm font-medium text-Marine-blue md:text-ms md:font-normal '
   >Email Address</label>
  <input
  onChange={handleChange}
  value={email}
   type="email"
   placeholder="e.g. stephenking@lorem.com"
   className='border border-Light-gray py-2 px-3 pl-5 font-normal rounded text-Cool-gray md:py-3 md:rounded-lg md:focus:outline-Purplish-blue md:cursor-pointer'
   />
    {error && <p className="text-Strawberry-red text-sm font-medium">{error}</p>}
  </div>
  
  <div className='flex flex-col my-5'>
  <label
   htmlFor=""
   className='text-sm font-medium text-Marine-blue md:text-ms md:font-normal '
   >Phone Number</label>
  <input
    onChange={handleChangeNumber}
    value={number}
    name='number'
   type="text"
   placeholder="e.g. +1 234 567 890"
   className='border border-Light-gray py-2 px-3 pl-5 font-normal rounded text-Cool-gray md:py-3 md:rounded-lg md:focus:outline-Purplish-blue md:cursor-pointer'
   />
    {numberError && <p className="text-Strawberry-red text-sm font-medium">{numberError}</p>}
  
  </div>
   </div>
   
     <div className="flex justify-between">
      <div></div>
     <button
     className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms md:cursor-pointer'
     >
      <Link to='/step2' >Next Step</Link>
      </button>
     </div>
    </div>
  )
}

export default Step1