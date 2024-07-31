import { useEffect, useState } from "react";
import { RES_MENU_API_CALL } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
    fetchData(); 
},[])
const fetchData=async()=>{
    const data=await fetch(RES_MENU_API_CALL+resId);
    const json=await data.json()
    console.log("res menu : ",json.data);
    setResInfo(json.data);
}
return resInfo;
}
export default useRestaurantMenu;