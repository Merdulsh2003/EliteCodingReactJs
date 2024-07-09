import React from 'react'
import { Link } from "react-router-dom";
import HighLightText from '../components/core/HomePage/HighLightText';
import toast from 'react-hot-toast';

function Navbar(props) {
  // const setIsLoggedIn = props.setIsLoggedIn;

  return (
<div>
     <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-5">
        {/* Logo */}
        <div className='text-3xl text-center font-mono' >
        <Link to="/">
         <HighLightText text={"EliteCoding"}/>
        </Link>
        </div>


          <div className="flex items-center gap-x-4 text-richblack-100 shadow-2xl">
          <Link to="/login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[20px] font-bold
                text-richblack-200 text-xl
                bg-gradient-radial  from-cyan-900 to-richblack-900"
                onClick={() => {
                  
                  toast.success("Logged out");}}
                >Log Out</button>
          </Link>
          </div>
      </div>      
</div>
  )
}

export default Navbar
