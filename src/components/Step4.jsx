import { Link } from "react-router-dom"

const Step4 = ({total, addOns, plans, toggleChange, change}) => {
  
  let all = addOns.map(item => item).filter(item => item.title !== undefined)

let GetAddOns = all.map(item => {

      return(
        <div className='flex justify-between'>
          <p className='text-Cool-gray' key={item.id}  >{item.title}</p>
          {change ? <p>+${item.yearly}/yr</p> : <p>+${item.monthly}/mo</p>}
        </div>
      )
    })

    let allPlans = plans.map(item => item).filter(item => item.title !== undefined)

    let GetPlans = allPlans.map(item => {
          return(
            <div className='flex justify-between items-center border-b border-Light-gray py-1'>
              <div>
              <p className='text-Marine-blue font-bold' key={item.id} >{item.title} (Monthly) </p>
              <button className='text-Cool-gray underline decoration-2' onClick={toggleChange}>Change</button>
              </div>
              {change ? <p className='font-bold'>+${item.yearly}/yr</p> : <p className='font-bold'>+${item.monthly}/mo</p>}
            </div>
          )
        })
  

  return (
    <div className=''>
  <div  className='bg-White py-8 px-4 rounded-lg shadow-xl'>
  <h2
     className='text-Marine-blue text-xl font-bold'>
    Finishing up
  </h2>
<p 
   className="text-Cool-gray w-72 my-1">
  Double-check everything looks OK before confirming.
</p>

<div className='mt-5 p-3 bg-Magnolia'>
    {GetPlans}
  <div className='space-y-2 mt-3'>
    {GetAddOns}
  </div>

</div>
  <div className='flex justify-between items-center mt-8 '>
  <p className='text-Cool-gray' >
    Total (per month)
  </p>
  {change ? <p className='text-Purplish-blue font-bold'>${total.yearly}/yr</p> : <p className='text-Purplish-blue font-bold'>${total.monthly}/mo</p> }
  </div>

  </div>
  <div 
className='flex justify-between'
>
    <button
      className="text-Cool-gray font-medium"
    > <Link to="/step3" >Go Back</Link> </button>
    <button
       className='border-2 bg-Purplish-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
    > <Link to="/step5" >Confirm</Link> </button>
</div>


    </div>
  )
}

export default Step4