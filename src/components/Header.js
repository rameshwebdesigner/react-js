import { LOGO_IMG } from "../utils/constants"

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_IMG} />
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};