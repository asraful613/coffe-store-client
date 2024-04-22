import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeCard from './Components/CoffeCard'

function App() {
  const coffees=useLoaderData();
  return (
    <>
      <h1 className="text-6xl text-purple-600 text-center my-3">Hot Cold Coffe: {coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
        coffees.map(coffee=> <CoffeCard coffee={coffee} key={coffee._id}></CoffeCard>)
      }
     </div>
    </>
  )
}

export default App
