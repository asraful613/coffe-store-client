import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeCard from './Components/CoffeCard'
import Swal from 'sweetalert2'

function App() {
  const loadedcoffees=useLoaderData();
  const[coffees,setCoffees]=useState(loadedcoffees)
  const handleDelete=_id=>{
    console.log('yoo',_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffe/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
            }
        })
        }
      });
}
  return (
    <>
      <h1 className="text-6xl text-purple-600 text-center my-3">Hot Cold Coffe: {coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
        coffees.map(coffee=> <CoffeCard handleDelete={handleDelete} coffee={coffee}
          coff
          key={coffee._id}></CoffeCard>)
      }
     </div>
    </>
  )
}

export default App
