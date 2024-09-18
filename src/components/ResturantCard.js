import { REST_IMG } from "../utils/constants"

const styleCard = {
    background: "#f0f0f0"
};
export const ResturantCard = (props) => {
    const { resData } = props;
    const { name, areaName, cloudinaryImageId, avgRating } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-img" src={REST_IMG + cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
};
