import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Department = () => {
  const navigate=useNavigate();
  const [array, setArray]=useState([]);
  const handleDoctor=(value)=>{
    try{
      navigate("/showDoctor", { state: { department: value } })

    }catch(error){
      console.log("There seems to be a problem");
    }
  }
  useEffect(()=>{
    const fetchDeps=async()=>{
      try{
        const result=await fetch('/Data/Department.json');
        const mydata=await result.json();
        if(!result.ok){
          console.log("SOmething went wrong");
         
        }
        setArray(mydata);
      }catch(error){
        console.log(error);
      }
    }
    fetchDeps();

  },[])
  console.log("my data is",array);
  return (
    <div>
      <div className="md:flex gap-7 overflow-hidden flex-wrap mx-0 justify-center border-2 border-black">
      {array.map((dep)=>(
        <div className="mt-14">
         <div className="cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor(dep.name)}>
         <div className="overflow-hidden">
             <img className="w-full h-[300px] object-cover" src={dep.image} alt="Internal Medicine" />
         </div>
         <div className="p-4 text-center">
             <h1 className="font-extrabold text-2xl italic text-mycolor">{dep.name}</h1>
             <p className="mt-2 text-gray-600 text-sm">{dep.description}</p>
             <p className="mt-2 text-gray-600 text-sm">{dep.history}</p>
         </div>
     </div>
     </div>
      ))}

      </div>
    
      
      
    </div>
  )
}

export default Department;
