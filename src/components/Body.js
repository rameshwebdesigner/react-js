import { ResturantCard } from "./ResturantCard";
import { useState, useEffect } from "react";

export const Body = () => {

    const [restsList, setRestsList] = useState([]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.454467&lng=78.4034188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestsList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchData();
        console.log("called useEffect");
    }, []);

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
            <div className="res-container">
                {restsList.map(rest => <ResturantCard key={rest.info.id} resData={rest} />)}
            </div>
        </div>
    );
};