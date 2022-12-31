import iconThankYou from '../assets/images/icon-thank-you.svg'

const Step5 = () => {
  return (
    <div className='rounded-lg shadow-xl flex flex-col items-center justify-evenly space-y-5 py-14 bg-White md:shadow-none '>
      <img className='w-16 md:w-20' src={iconThankYou} alt="" />
      <h3 className='text-Marine-blue text-xl font-bold md:text-xxl'>Thank you!</h3>

<p className='text-center text-Cool-gray px-4 md:w-[480px] '>
  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.

</p>
    </div>
  )
}

export default Step5