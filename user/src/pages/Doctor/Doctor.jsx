import React from 'react'
import { useLocation } from 'react-router-dom';

const Doctor = () => {
    const location=useLocation();
    const department=location.state?.department || "Unknown";
  return (
    <div>
        <h1 className="flex justify-center text-2xl text-green-500">Welcome to {department} page</h1>
      
    </div>
  )
}

export default Doctor;
