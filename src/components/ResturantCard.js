import { REST_IMG } from "../utils/constants"

const styleCard = {
    background: "#f0f0f0"
};
const ResturantCard = (props) => {
    const { resData } = props;
    const { name, areaName, cloudinaryImageId, avgRatingString } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-img" src={REST_IMG + cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRatingString}</h4>
        </div>
    );
};

// Higher Order Component

// input - ResturantCard => ResturantCardPromoted

export const withPromationlabel = (ResturantCard) => {
    return (props) => {
        return (
            <div className="flex">
                <label>Promotion</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;