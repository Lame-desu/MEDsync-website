// import React, { useState } from 'react';
// import internalImg from "../assets/internal.jpg";
// import surgery from "../assets/surgery.jpg"
// import pediatric from "../assets/pediatric.jpg"
// import psycho from "../assets/psycho.jpg"
// import derma from "../assets/derma.jpg"
// import neuro from "../assets/neuro.jpg"
// import { useNavigate } from 'react-router-dom';
// const Navbar = () => {
//     const navigate=useNavigate();
//     const [show, setShow] = useState(false);
//     const [error, setError] = useState("");

//     const handleDoctor = (value) => {
//         try {
//             // Add functionality here
//             navigate("/showDoctor", {state: {department: value}})



//         } catch (error) {
//             setError("Something went wrong! please try again");
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <div className="flex justify-center mt-3">
//                 <h1 className="text-mycolor flex justify-center w-36 font-extrabold text-xl border-4 border-mycolor rounded-xl hover:text-green-300 cursor-pointer" onClick={() => setShow(!show)}>Department</h1>
//             </div>
//             <div className="flex justify-center mt-3">
//                 <h1 className="text-mycolor flex justify-center w-36 font-extrabold text-xl border-4 border-mycolor rounded-xl hover:text-green-300 cursor-pointer" onClick={() => navigate('/about')}>About</h1>
//             </div>
            

//             <div className="flex justify-center">
//                 {show ? (
//                     <div>
//                         <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={()=>handleDoctor("Internal")}>Internal Medicine</h1>
//                         <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={()=>handleDoctor("Surgery")}>Surgery</h1>
//                         <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={()=>handleDoctor("Pediatrics")}>Pediatrics</h1>
//                         <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={()=>handleDoctor("Psychiatry")}>Psychiatry</h1>
//                         <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={()=>handleDoctor("Derma")}>Dermatology</h1>
//                         <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={()=>handleDoctor("Neuro")}>Neurology</h1>
//                     </div>
//                 ) : null}
//                 <div onClick={() => setError("")}>
//                     <h1 className="text-red-500 italic">{error}</h1>
//                 </div>
//             </div>

//             <div className="mt-14">
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   
//                     <div className="group cursor-pointer w-full border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={()=>handleDoctor("Internal")}>
//                         <div className="overflow-hidden">
//                             <img className="w-full h-[300px] object-cover" src={internalImg} alt="Internal Medicine" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h1 className="font-extrabold text-2xl italic text-mycolor">Internal Medicine</h1>
//                             <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing and treating adult diseases with comprehensive care for a wide range of conditions.</p>
//                         </div>
//                     </div>

                   
//                     <div className="group cursor-pointer w-full border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={()=>handleDoctor("Surgery")}>
//                         <div className="overflow-hidden">
//                             <img className="w-full h-[300px] object-cover" src={surgery} alt="Internal Medicine" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h1 className="font-extrabold text-2xl italic text-mycolor">Surgery</h1>
//                             <p className="mt-2 text-gray-600 text-sm">Focused on performing operative procedures to treat injuries, diseases, and deformities with precision and care, ensuring the best possible outcomes for patients.</p>
//                         </div>
//                     </div>
//                     <div className="group cursor-pointer w-full border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={()=>handleDoctor("Pediatrics")}>
//                         <div className="overflow-hidden">
//                             <img className="w-full h-[300px] object-cover" src={pediatric} alt="Internal Medicine" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h1 className="font-extrabold text-2xl italic text-mycolor">Pediatrics</h1>
//                             <p className="mt-2 text-gray-600 text-sm">Focused on providing specialized medical care for infants, children, and adolescents, ensuring their healthy growth, development, and well-being.</p>
//                         </div>
//                     </div>
//                     <div className="group cursor-pointer w-full border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={()=>handleDoctor("Psychiatry")}>
//                         <div className="overflow-hidden">
//                             <img className="w-full h-[300px] object-cover" src={psycho} alt="Internal Medicine" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h1 className="font-extrabold text-2xl italic text-mycolor">Psychiatry</h1>
//                             <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing, treating, and preventing mental health disorders to support emotional well-being and improve overall quality of life.</p>
//                         </div>
//                     </div>
//                     <div className="group cursor-pointer w-full border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={()=>handleDoctor("Derma")}>
//                         <div className="overflow-hidden">
//                             <img className="w-full h-[300px]" src={derma} alt="Internal Medicine" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h1 className="font-extrabold text-2xl italic text-mycolor">Dermatology</h1>
//                             <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing and treating skin, hair, and nail conditions, while promoting healthy and radiant skin for overall well-being.</p>
//                         </div>
//                     </div>
//                     <div className="group cursor-pointer w-full border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={()=>handleDoctor("Neuro")}>
//                         <div className="overflow-hidden">
//                             <img className="min-w-full h-[300px] object-cover" src={neuro} alt="Internal Medicine" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h1 className="font-extrabold text-2xl italic text-mycolor">Neurology</h1>
//                             <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and nerves, to enhance neurological health and function.</p>
//                         </div>
//                     </div>

                  
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import internalImg from "../assets/internal.jpg";
import surgery from "../assets/surgery.jpg";
import pediatric from "../assets/pediatric.jpg";
import psycho from "../assets/psycho.jpg";
import derma from "../assets/derma.jpg";
import neuro from "../assets/neuro.jpg";
import { useNavigate } from 'react-router-dom';

const Department = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    const handleDoctor = (value) => {
        try {
            // Add functionality here
            navigate("/showDoctor", { state: { department: value } })
        } catch (error) {
            setError("Something went wrong! please try again");
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-center mt-3">
                <h1 className="text-mycolor flex justify-center w-36 font-extrabold text-xl border-4 border-mycolor rounded-xl hover:text-green-300 cursor-pointer" onClick={() => setShow(!show)}>Department</h1>
            </div>
            <div className="flex justify-center mt-3">
                <h1 className="text-mycolor flex justify-center w-36 font-extrabold text-xl border-4 border-mycolor rounded-xl hover:text-green-300 cursor-pointer" onClick={() => navigate('/about')}>About</h1>
            </div>

            <div className="flex justify-center">
                {show ? (
                    <div>
                        <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={() => handleDoctor("Internal")}>Internal Medicine</h1>
                        <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={() => handleDoctor("Surgery")}>Surgery</h1>
                        <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={() => handleDoctor("Pediatrics")}>Pediatrics</h1>
                        <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={() => handleDoctor("Psychiatry")}>Psychiatry</h1>
                        <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={() => handleDoctor("Derma")}>Dermatology</h1>
                        <h1 className="font-extrabold text-xl italic mt-3 cursor-pointer hover:text-green-500" onClick={() => handleDoctor("Neuro")}>Neurology</h1>
                    </div>
                ) : null}
                <div onClick={() => setError("")}>
                    <h1 className="text-red-500 italic">{error}</h1>
                </div>
            </div>

            <div className="mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="group cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor("Internal")}>
                        <div className="overflow-hidden">
                            <img className="w-full h-[300px] object-cover" src={internalImg} alt="Internal Medicine" />
                        </div>
                        <div className="p-4 text-center">
                            <h1 className="font-extrabold text-2xl italic text-mycolor">Internal Medicine</h1>
                            <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing and treating adult diseases with comprehensive care for a wide range of conditions.</p>
                        </div>
                    </div>

               
                    <div className="group cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor("Surgery")}>
                        <div className="overflow-hidden">
                            <img className="w-full h-[300px] object-cover" src={surgery} alt="Surgery" />
                        </div>
                        <div className="p-4 text-center">
                            <h1 className="font-extrabold text-2xl italic text-mycolor">Surgery</h1>
                            <p className="mt-2 text-gray-600 text-sm">Focused on performing operative procedures to treat injuries, diseases, and deformities with precision and care.</p>
                        </div>
                    </div>

                    
                    <div className="group cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor("Pediatrics")}>
                        <div className="overflow-hidden">
                            <img className="w-full h-[300px] object-cover" src={pediatric} alt="Pediatrics" />
                        </div>
                        <div className="p-4 text-center">
                            <h1 className="font-extrabold text-2xl italic text-mycolor">Pediatrics</h1>
                            <p className="mt-2 text-gray-600 text-sm">Specialized medical care for infants, children, and adolescents, ensuring their healthy growth, development, and well-being.</p>
                        </div>
                    </div>

                   
                    <div className="group cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor("Psychiatry")}>
                        <div className="overflow-hidden">
                            <img className="w-full h-[300px] object-cover" src={psycho} alt="Psychiatry" />
                        </div>
                        <div className="p-4 text-center">
                            <h1 className="font-extrabold text-2xl italic text-mycolor">Psychiatry</h1>
                            <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing, treating, and preventing mental health disorders to support emotional well-being and improve overall quality of life.</p>
                        </div>
                    </div>

                  
                    <div className="group cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor("Derma")}>
                        <div className="overflow-hidden">
                            <img className="w-full h-[300px] object-cover" src={derma} alt="Dermatology" />
                        </div>
                        <div className="p-4 text-center">
                            <h1 className="font-extrabold text-2xl italic text-mycolor">Dermatology</h1>
                            <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing and treating skin, hair, and nail conditions, while promoting healthy and radiant skin for overall well-being.</p>
                        </div>
                    </div>

                    
                    <div className="group cursor-pointer w-[350px] mx-auto border rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105" onClick={() => handleDoctor("Neuro")}>
                        <div className="overflow-hidden">
                            <img className="min-w-full h-[300px] object-cover" src={neuro} alt="Neurology" />
                        </div>
                        <div className="p-4 text-center">
                            <h1 className="font-extrabold text-2xl italic text-mycolor">Neurology</h1>
                            <p className="mt-2 text-gray-600 text-sm">Focused on diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and nerves, to enhance neurological health and function.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;
