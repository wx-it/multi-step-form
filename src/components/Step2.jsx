import { Link } from 'react-router-dom'

const Step2 = ({time, toggle, toggleplansData ,plansData , getplansData , toggleState}) => {
  

  
  const getData = plansData.map(data =>{
    function Price(){
      if(time=== true){
          return(
           <p className='text-Cool-gray text-sm'>${data.yearly}/yr</p>
          )
      } else{
          return(
           <p className='text-Cool-gray text-sm'>${data.monthly}/mo</p>
          )
      }
  }
    return(
      <div id='box' onClick={(e)=>{toggleplansData(e); toggleState(data.id)}} key={data.id} className='box flex border border-Light-gray rounded-lg items-center space-x-4 py-2 p-4 
      md:flex-col md:items-start md:justify-start md:space-x-0 md:space-y-10 md:py-4 md-px-0 md:w-[140px] md:h-42 md:first:mt-2 md:hover:border-Purplish-blue md:cursor-pointer'>
  <div className=''>
    <img src={data.image} alt="" />
  </div>
    <div className='block md:flex md:flex-col md:items-start md:justify-start md:w-full'>
     <h3  className='font-medium text-Marine-blue' >{data.title}</h3>
     <Price/>
     {time && <p className='text-sm text-Marine-blue font-normal'>2 months free</p>}
    </div>
</div>

    )
  })

  return (
  <div className='md:space-y-16'>    
  <div className='bg-White py-8 px-6 rounded-lg shadow-xl md:shadow-none'>
    
  <h2
    className='text-Marine-blue text-xl font-bold md:text-xxl'
  >
    Select your plan</h2>
  <p
   className="text-Cool-gray w-72 my-1 md:w-auto"
  >You have the option of monthly or yearly billing.</p>

<div id='boxes' className='boxes space-y-2 mt-5 md:flex md:items-center md:justify-between md:space-x-5 md:mt-11'>
{getData}

</div>

<div className='flex items-center justify-center space-x-3 mt-8 md:mt-11'>
  
    <span className={time ? 'text-Cool-gray font-bold text-ms' : 'font-bold text-Marine-blue text-ms'} >Monthly</span> 
    
    <label className="inline-flex relative items-center cursor-pointer">
    <input onClick={toggle} type="checkbox" value="" className="sr-only peer"/>
    <div className="w-10 h-5 bg-Marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-White 
    rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-[2px] after:left-[3.75px] after:bg-White after:border-Marine-blue after:border 
    after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:Marine-blue"></div>
</label>
    <span className={time ? 'text-Marine-blue font-bold text-ms' : 'font-bold text-Cool-gray text-ms'}>Yearly</span>
</div>
  </div>

<div 
className='flex justify-between items-center'
>
    <button
      className="text-Cool-gray font-medium md:cursor-pointer"
    > <Link to="/" >Go Back</Link> </button>
    <button onClick={getplansData}
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms md:cursor-pointer'
    > <Link to="/step3" >Next Step</Link> </button>
</div>

  </div>
  )
}

export default Step2