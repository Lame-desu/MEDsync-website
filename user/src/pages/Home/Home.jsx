import React from 'react'
import doctorsicon from '../../assets/doctorsicon.png'
import doc1 from '../../assets/doc1.jpg'
import doc2 from '../../assets/doc2.jpg'
import doc3 from '../../assets/doc3.jpg'
const Home = () => {
  return (
    <div className="flex flex-col items-center font-outfit">
      <div className="flex justify-around  w-[80%] h-[500px]  mt-8 pt-20 rounded-lg bg-[#5AC5C8]">
        <div className="w-[60%] pl-10  text-white flex flex-col gap-2 ">
          <p className="text-6xl font-semibold  mt-10">
            Book Appointment with Trusted Doctors
          </p>
          <div className="flex mt-4 ">
            <div className="flex ">
              <img className="w-14 h-14 rounded-full" src={doc1} alt="" />
              <img
                className="w-14 relative right-4 h-14 rounded-full"
                src={doc2}
                alt=""
              />
              <img
                className="w-14 relative right-7 h-14 rounded-full"
                src={doc3}
                alt=""
              />
            </div>
            <div className="w-[60%]">
              Find trusted Ethiopian doctors and book appointments easily for
              efficient communication.
            </div>
          </div>
          <div>
            <button className="h-12 w-48 rounded-full bg-white mt-5 text-[#5f6666] transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95">
              Book appointment
            </button>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <img
            className="overflow-hidden w-[90%] h-[90%]   "
            src={doctorsicon}
            alt=""
          />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home