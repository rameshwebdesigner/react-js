import React from "react";
import ReactDOM from "react-dom/client"
// React Element component
const title = "Hashitha"

// function component
const Heading = () => (
    <div class="parent" > Ramesh Bankuru</div>
)
// function component
const Head = () => (
    <div>
        {title}
        <Heading />
        <div class="parent" > Functional component</div>
    </div>
)
// const heading = React.createElement("div", { className: "parent" }, "Ramesh");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Head />);
//root.render(heading)