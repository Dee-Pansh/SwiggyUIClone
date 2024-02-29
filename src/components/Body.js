import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import { RecommendedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import React from "react";
const Body = () =>{
    const resList=useRestaurants();
    const [filterList,setFilterList]=useState([])
    const [searchText,setSearchText]=useState("") 
    const RecommendRestaurantCard=RecommendedRestaurantCard(RestaurantCard);

    useEffect(
      ()=>setFilterList(resList),
      [resList]
      );
    console.log("restaurants :",filterList);
    const onlineStatus=useOnlineStatus();
    if(onlineStatus==false)
    return <h1>Looks like you are offline, kindly check your internet connection</h1>
return filterList.length==0?
<Shimmer/>:
(
<div className="body dark:bg-black"> 
<div className="filter flex items-center w-1/2 mx-auto">
<div className="search m-4 p-4">
<input type="text" className={`border border-black h-[36px] dark:bg-black dark:border-white`} onChange={(e)=>{
   setSearchText(e.target.value)
}}
onKeyPress={(event)=>{
if(event.keyCode===0)setFilterList(resList.filter(res=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())})) 
}
}
/>
<button className="px-4 py-2 rounded-lg bg-green-100 dark:bg-black dark:text-white m-4" onClick={()=>{setFilterList(resList.filter(res=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())}))}}>Search</button>
</div>
<div className="m-4 p-4">
<button type="submit" className="px-4 py-2 bg-gray-200 dark:text-black rounded-lg" onClick={()=>setFilterList(filterList.filter((restaurant)=>restaurant.info.avgRating>=4.0))}>
   Top Rated Restaurants
</button>
</div>
</div>
<div className="flex flex-wrap w-[90vw] mx-auto">
{filterList.map((restaurant)=>
(
<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} style={{"padding":"0px","margin":"0px"}}>
{
"veg" in restaurant.info?<RecommendRestaurantCard resDetails={restaurant.info} />:
<RestaurantCard resDetails={restaurant.info}/>
}
</Link>
)
)
}
</div>
</div>
)
}
export default Body