import { Link } from "react-router-dom";
import ResturantCard, { withPromationlabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {

    const [restsList, setRestsList] = useState([]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.454467&lng=78.4034188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestsList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();
    const ResturantCardPromoted = withPromationlabel(ResturantCard);

    if (onlineStatus === false) return <h1>Your internet is Office</h1>
    console.log(restsList);
    if (restsList.length === 0) {
        return ("Loading...")
    }

    return (
        <div className="body">
            <div className="search">
                <button type="button" onClick={() => {
                    const filterRestsList = restsList.filter(
                        (item) => item.info.avgRating > 4.2
                    );
                    setRestsList(filterRestsList);
                }}>Filter</button>
            </div>
            <div className="res-container flex overflow-hidden">
                {restsList.map((rest) => (
                    <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
                        {rest.info.veg ? <ResturantCardPromoted resData={rest} /> : <ResturantCard resData={rest} />}

                    </Link>
                ))}
            </div>
        </div>
    );
};