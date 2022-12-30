import iconThankYou from '../assets/images/icon-thank-you.svg'

const Step5 = () => {
  return (
    <div className='rounded-lg shadow-xl flex flex-col items-center justify-evenly space-y-5 py-14 bg-White '>
      <img className='w-16' src={iconThankYou} alt="" />
      <h3 className='text-Marine-blue text-xl font-bold'>Thank you!</h3>

<p className='text-center text-Cool-gray px-4'>
  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.

</p>
    </div>
  )
}

export default Step5