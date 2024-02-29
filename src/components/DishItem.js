import React from "react";
const DishItem=({dishitem})=>{
  const {imageId,name}=dishitem
    return (
        <>
       <div className="DishItem h-[120px] flex  items-center justify-between">
          <div className="part1">
        <img src={require("../utils/Images/VegLogo.png")} />
            <h4>{name}</h4>
            <p>Rs {(dishitem.price || dishitem.defaultPrice)/100}</p>
          </div>
          <div className="part2 h-full w-[150px]">
            {imageId!=undefined && <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} className="h-[100%] rounded-lg" />}
          </div>
       </div>
       <br/>
       <hr />  
       <br/>
       </>
    )
}
export default DishItem;