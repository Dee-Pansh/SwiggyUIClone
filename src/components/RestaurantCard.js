import { CDN_URL } from "../utils/constants"
import React from "react"
const RestaurantCard = ({ resDetails }) => {
    const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } = resDetails
    return (

        <div className="flex flex-col m-5 hover:bg-gray-200 dark:hover:text-black rounded-lg p-2">
            <img className="res-logo w-64 h-44 rounded-2xl" src={CDN_URL + cloudinaryImageId} alt="restaurant logo" />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h5><i>{cuisines.slice(0, 2).join(" , ")}</i></h5>
            <h5>⭐{avgRating}  • {sla.deliveryTime} mins</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

//Higher Order Component
export const RecommendedRestaurantCard = (RestaurantCard) => {
    console.log("hii");
    return (props) => {
        return (
            <div >
                <label className="absolute text-white bg-black">Only Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard