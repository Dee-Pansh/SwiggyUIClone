import { useEffect, useState } from "react"
import { RESLIST_API_CALL } from "./constants";
const useRestaurants=()=>{
    const [resList,setResList]=useState([]);
    useEffect(()=>{
     fetchData();
    },[]);
   const fetchData=async()=>{
    const data=await fetch(RESLIST_API_CALL);
    const json=await data.json();
    setResList(json?.data?.cards[4]?.card?.card["gridElements"]?.infoWithStyle?.restaurants);
   }
   return resList;
}
export default useRestaurants;