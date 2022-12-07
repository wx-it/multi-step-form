import React from 'react'

const Step2 = () => {
  return (
  <div className='border-2 border-black'>    
  <div className='bg-white mx-5 py-8 px-4 rounded-lg shadow-xl'>
    
  <h2>Select your plan</h2>
  <p>You have the option of monthly or yearly billing.</p>

<div>
    <h3>Arcade</h3>
    <p>$9/mo</p>
</div>
<div>
    <h3>Advanced</h3>
    <p>$12/mo</p>
</div>
<div>
    <h3>Pro</h3>
    <p>$15/mo</p>
</div>
<div>
    <p>Monthly</p>
    <p>Yearly</p>
</div>
  </div>

<div>
    <button>Go Back</button>
    <button>Next Step</button>
</div>

  </div>
  )
}

export default Step2