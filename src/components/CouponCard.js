import React from "react";
const CouponCard=({Card})=>{
    const {logoBottom,couponCode,header,description}=Card
    return(
        <div className="couponCard">
        <div>
            <img className="couponIcon" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/"+logoBottom}/>
        <span>
            {header}
        </span>
        </div>
        <div>
        {couponCode}| {description}
        </div>
        </div>
    )
}
export default CouponCard;