import DishItem from "./DishItem";
import React from "react";
const DishCategory = ({ Dish }) => {
    const { title, itemCards } = Dish
    if ("categories" in Dish == false ) {
        return (
            <div className="flex flex-col">
            <h4 className="font-bold mt-2 text-left">{title}&nbsp;({itemCards?.length})</h4>
            {Dish.itemCards?.map((dishitem,index) => <DishItem key={index} dishitem={dishitem.card.info} />)}
            </div>
        )
    }
}
export default DishCategory;