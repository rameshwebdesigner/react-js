import { useState, useEffect } from "react";

export const useResturantMenu = (resId) => {
    const [restInfo, setRestinfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.454467&lng=78.4034188&restaurantId=" + resId);
        const json = await data.json();
        setRestinfo(json?.data);

    }
    useEffect(() => {
        fetchMenu();
    }, []);


    return restInfo;

}