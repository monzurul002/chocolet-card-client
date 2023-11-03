import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai'
import TableData from './components/TableData'
import { useState } from 'react'



function App() {
  const coffes = useLoaderData()
  const [allCoffes, setAllCoffes] = useState(coffes)

  return (

    <div className='w-11/12 mx-20  p-5 '>
      <h2 className='font-bold py-2 mt-10 md:w-96 lg w-11/12 mx-auto text-center  text-white md:text-2xl text-xl bg-gradient-to-r from-amber-500 via-white-500 to-red-950  text-center'>Chocolate Management  System</h2>
      <Link to="/addCoffe"> <button className='mt-12 md:ms-24 ms-8 flex bg-amber-700 text-white justify-center  items-center mb-4 p-2  mt-3 bg-amber-800' > <AiOutlinePlus className='text-white  font-bold'></AiOutlinePlus>   New Chocolate </button></Link>
      <div className=' mx-auto	 w-8/12' >
        {/* <div className='flex justify-center items-center  	 w-10/12' > */}
        <div>
          <table className="table table-zebra">
            {/* head */}
            <thead >
              <tr className='bg-indigo-200 '>

                <th className='font-bold'>Name</th>
                <th className='font-bold'>Country</th>
                <th className='font-bold'>Category</th>
                <th className='font-bold'>Quality</th>
                <th className='font-bold'>Action</th>


              </tr>
            </thead>
            <tbody>
              {
                allCoffes.map(coffe => <TableData
                  key={coffe._id} coffe={coffe} allCoffes={allCoffes} setAllCoffes={setAllCoffes}
                ></TableData>)
              }

            </tbody>

          </table>


        </div>
      </div>
    </div>

  )
}

export default App
