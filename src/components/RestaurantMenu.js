import Shimmer from "./Shimmer"
import CouponCard from "./CouponCard"
import DishCategory from "./DishCategory"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import React from "react"
const RestaurantMenu=()=>{
    const {resid}=useParams();
    //custom hook : useRestaurantMenu
    const resMenu=useRestaurantMenu(resid);
    if(resMenu===null)
    return <Shimmer/>
    console.log("data fetched : ",resMenu);
    const {name,cuisines,areaName,sla,avgRatingString,totalRatingsString,costForTwoMessage,feeDetails}=resMenu?.cards[2]?.card?.card?.info;
    const offers=resMenu?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const Dishes=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


    return (
        <div className="resMenu dark:bg-black dark:w-[100%] flex flex-col w-[75%] mx-auto flex-wrap">
           <div className="hotelIntro flex flex-row justify-between">
            <div className="box1 flex flex-col">
                <h3 className="font-bold">{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}, {sla.lastMileTravelString}</p>
                <p><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/"+feeDetails.icon}/>{feeDetails.message}</p>
            </div>
            <div className="box2 flex flex-col">
                <div className="flex">
                <img src={require("../utils/Svgs/star-solid.svg")} className="h-4 w-4"/>&nbsp;{avgRatingString}
                </div>
                <hr/>
                <div>
                    {totalRatingsString}
                </div>
            </div>
           </div>
           <br />
           <hr />
           <div className="CouponCodes flex flex-col">
            <div className="cc1 flex flex-row">
                <div className="flex flex-row w-[141px]">
                <img src={require("../utils/Images/Icon1.png")} />
                <span>{sla.slaString}</span>
                </div>
                <div className="flex flex-row">
                <img src={require("../utils/Images/Icon2.png")}/>
                <span>{costForTwoMessage}</span>
                </div>
            </div>
            <br/> 
            <div className="cc2 flex flex-row justify-between">
                {offers.map((offer,index)=><CouponCard key={index} Card={offer.info}/>)}
            </div>
            {/* TRYING TO INCLUDING VEG TOOGLE BUTTON 
            <div className="cc3">
                {"isPureVeg" in info?
                <div><img src={require("../utils/Images/pureVegLogo.png")}/>&nbsp; PURE VEG</div>
                :
                <div>
                    <span class="slider round"></span>
                </div>
                }
            </div> */}
           </div>
           <br/>
           <hr />
           <div className="Dishes flex flex-wrap flex-col">
               {
               Dishes.map(
                (Dish,index)=>
                {
                    if(index>=2)return <DishCategory key={index} Dish={Dish.card.card}/>
                }
                )
               }
           </div>
        </div>
    )
}



export default RestaurantMenu