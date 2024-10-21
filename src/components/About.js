import React from "react";
import { Profile } from "./Profile"

export class About extends React.Component {
    constructor() {
        super();
        console.log("constructor");

    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        console.log("Render");
        return (
            <div className="flex">
                <h1>About page</h1>
                <Profile />
            </div>
        )
    }

}
