import { Link } from "react-router-dom";
import { ResturantCard } from "./ResturantCard";
import { useState, useEffect } from "react";

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
                {restsList.map((rest) => (
                    <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
                        <ResturantCard resData={rest} />
                    </Link>
                ))}
            </div>
        </div>
    );
};