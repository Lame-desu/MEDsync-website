import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center  mx-4 sm:mx-[10%] mt-5 font-outfit">
        {/**logo**/}
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 " src={logo} alt="logo" />
          <p className=" text-[20px] font-medium text-[#5AC5C8]">
            <span className="text-[25px] font-bold text-[#04353D]">Med</span>
            Sync
          </p>
        </div>

        {/**Navlink**/}
        <div className="">
          <ul className="flex gap-5 font-medium text-[15px]">
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/department"}>DEPARTMENT</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </li>
          </ul>
        </div>

        {/**login button**/}
        <div>
          <button className="rounded-3xl bg-[#5AC5C8] text-white w-36 h-12 hover:bg-[#5fb0bd] hover:text-[#bdd4d4]">
            login
          </button>
        </div>
      </div>
      <hr className="mx-[10%] h-[1.5px] mt-4 bg-[#909293]" />
    </div>
  );
}

export default Navbar;