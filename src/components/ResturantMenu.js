import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const ResturantMenu = () => {
    const [restInfo, setRestinfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.454467&lng=78.4034188&restaurantId=" + resId);
        const json = await data.json();
        //console.log(json?.data?.cards[2]?.card?.card?.info);
        setRestinfo(json?.data);

    }
    useEffect(() => {
        fetchMenu();
    }, []);
    if (restInfo === null) {
        return (<div className="empty">Loading..</div>)
    }
    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    const itemCards = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards



    return (
        <div className="card-ctn">
            <h1 className="test">{name}</h1>
            <div className="test">{cuisines.join(", ")}</div>
            <div className="test">{costForTwoMessage}</div>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                    (<li key={item.card.info.id}>{item.card.info.name}</li>)
                )}
            </ul>

        </div>

    )
}