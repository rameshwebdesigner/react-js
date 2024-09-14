const heading = React.createElement("div", { className: "parent" },
    React.createElement("div", { className: "child" },
        [
            React.createElement("h1", { className: "heading" }, "Ramesh"),
            React.createElement("h2", { className: "heading" }, "Bankuru")
        ]
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);
root.render(heading);