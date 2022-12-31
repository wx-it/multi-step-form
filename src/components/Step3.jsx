import Divs from './Divs'
import { Link } from 'react-router-dom'

const Step3 = ({time, data, squares, toggleSquare, getSquares, getBoxes, getAll}) => {
  

  const getData = squares.map((data)=>{
    return <Divs 
                  key={data.id} 
                  id={data.id}
                  on={data.on}
                  toggle={toggleSquare}
                  data={data}
                  time={time}
                  />
  })

  return (
    <div className='md:space-y-16'>
      <div className="bg-White py-8 px-6 rounded-lg shadow-xl md:shadow-none">
      <h3
       className='text-Marine-blue text-xl font-bold md:text-xxl'
      >Pick add-ons</h3>
         <p
       className="text-Cool-gray w-72 my-1 md:w-auto"   
         >Add-ons help enhance your gaming experience.</p>
<div className='space-y-2 mt-5'>
{getData}
</div>
      </div>

      <div 
className='flex justify-between items-center'
>
    <button
      className="text-Cool-gray font-medium"
    > <Link to="/step2" >Go Back</Link> </button>
    <button
       onClick={()=>{getAll(); getSquares(); getBoxes();}}
       className='border-2 bg-Marine-blue text-White text-bold px-4 py-2 rounded-md my-4 font-normal text-ms'
    > <Link to="/step4" >Next Step</Link> </button>
</div>


    </div>
  )
}

export default Step3