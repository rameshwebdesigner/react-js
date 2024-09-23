import { LOGO_IMG } from "../utils/constants"
import { Outlet, Link } from "react-router-dom";


export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_IMG} />
            </div>
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};