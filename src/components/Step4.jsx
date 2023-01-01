import { Link } from "react-router-dom"

const Step4 = ({total, addOns, plans, toggleChange, change}) => {
  
  let all = addOns.map(item => item).filter(item => item.title !== undefined)

let GetAddOns = all.map(item => {

      return(
        <div className='flex justify-between'>
          <p className='text-Cool-gray md:text-ms' key={item.id}  >{item.title}</p>
          {change ? <p>+${item.yearly}/yr</p> : <p>+${item.monthly}/mo</p>}
        </div>
      )
    })

    let allPlans = plans.map(item => item).filter(item => item.title !== undefined).slice(-1)

    let GetPlans = allPlans.map(item => {
          return(
            <div className='flex justify-between items-center border-b border-Light-gray py-1 md:pb-5'>
              <div>
              <p className='text-Marine-blue font-medium' key={item.id} >{item.title} (Monthly) </p>
              <button className='text-Cool-gray underline decoration-2 md:focus:text-Purplish-blue md:text-sm' onClick={toggleChange}>Change</button>
              </div>
              {change ? <p className='font-bold'>+${item.yearly}/yr</p> : <p className='font-bold'>+${item.monthly}/mo</p>}
            </div>
          )
        })
  

  return (
    <div className='md:space-y-16'>
  <div  className='bg-White py-8 px-6 rounded-lg shadow-xl md:shadow-none'>
  <h2
     className='text-Marine-blue text-xl font-bold md:text-xxl'>
    Finishing up
  </h2>
<p 
   className="text-Cool-gray w-72 my-1 md:w-auto">
  Double-check everything looks OK before confirming.
</p>

<div className='mt-5 p-3 bg-Magnolia md:px-4'>
    {GetPlans}
  <div className='space-y-2 mt-3 md:space-y-4'>
    {GetAddOns}
  </div>

</div>
  <div className='flex justify-between items-center mt-8 md:px-3'>
  <p className='text-Cool-gray md:text-ms' >
    Total (per month)
  </p>
  {change ? <p className='text-Purplish-blue font-bold'>${total.yearly}/yr</p> : <p className='text-Purplish-blue font-bold'>${total.monthly}/mo</p> }
  </div>

  </div>
  <div 
className='flex justify-between'
>
    <button
      className="text-Cool-gray font-medium text-ms"
    > <Link to="/step3" >Go Back</Link> </button>
    <button
       className='border-2 bg-Purplish-blue font-bold text-White px-4 py-2 rounded-md my-4 text-ms md:px-7 md:py-3 md:rounded-xl'
    > <Link to="/step5" >Confirm</Link> </button>
</div>


    </div>
  )
}

export default Step4