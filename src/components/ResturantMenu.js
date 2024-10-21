// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

export const ResturantMenu = () => {
    const { resId } = useParams();

    const restInfo = useResturantMenu(resId);

    if (restInfo === null) {
        return (<div className="empty">Loading..</div>)
    }

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    const itemCards = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    console.log("restInfo", restInfo);

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch action
        debugger;
        dispatch(addItems(item))
    }

    return (
        <div className="card-ctn">
            <h1 className="test">{name}</h1>
            <div className="test">{cuisines.join(", ")}</div>
            <div className="test">{costForTwoMessage}</div>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                (<li style={{ "border": "solid 1px #000", margin: 5 }} key={item.card.info.id}>
                    {item.card.info.name}
                    <button type="button" onClick={() => handleAddItem(item)}>Add + </button>
                </li>)
                )}
            </ul>

        </div >

    )
}