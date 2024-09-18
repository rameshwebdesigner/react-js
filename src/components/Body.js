import { ResturantCard } from "./ResturantCard";
// import { resList } from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
    let restaurentList = [
        {
            "info": {
                "id": "509004",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Serilingampally Mandal",
                "areaName": "Madhapur",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "61955",
                "avgRatingString": "4.1",
                "totalRatingsString": "2.1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },

            },
        },
        {
            "info": {
                "id": "337235",
                "name": "Sai Darshini Tiffins",
                "cloudinaryImageId": "mlhkup9htisw4xweuqsp",
                "locality": "Ameerpet",
                "areaName": "Sanath Nagar",
                "costForTwo": "₹120 for two",
                "cuisines": [
                    "South Indian"
                ],
                "avgRating": 4.5,
                "parentId": "11825",
                "avgRatingString": "4.5",
                "totalRatingsString": "13K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                }

            }
        },
        {
            "info": {
                "id": "785248",
                "name": "Swach -South Indian Cafe",
                "cloudinaryImageId": "cc66fd9193e9b8e44aaa74f77200e28b",
                "locality": "Madhapur",
                "areaName": "Madhapur",
                "costForTwo": "₹140 for two",
                "cuisines": [
                    "South Indian"
                ],
                "avgRating": 4.6,
                "parentId": "467456",
                "avgRatingString": "4.6",
                "totalRatingsString": "2.8K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },

            }
        },
    ]
    const [restsList, setRestsList] = useState(restaurentList);


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