import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"
import React from "react"
const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    const [theme,setTheme]=useState("light")
    const onlineStatus=useOnlineStatus();
    useEffect(()=>{
      if(theme=="dark")
      {
 document.documentElement.classList.add("dark")
 document.documentElement.classList.add("text-white")
      }
else
{
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.remove("text-white")
}
    },[theme])

    return (
        <div className="flex justify-between shadow-md mb-2 bg-pink-100 h-20 sm:bg-yellow-400 lg:bg-slate-500 dark:bg-black">
            <div className="w-56 ">
                <img src={LOGO_URL} alt="Food Logo" className="logo h-20 rounded-r-md shadow-" />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">
                       Online Status : {onlineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li className="px-4">
                       Cart 
                    </li>
                    <li className="px-4">
                      <button onClick={()=>setBtnName("Logout")}>
                        {btnName}
                        </button>  
                    </li>
                    <li className="px-4">
                     <button onClick={()=>
                        {
                        setTheme(theme=="dark"?"light":"dark");
                        }
                        }>
                      {theme} Mode
                     </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header