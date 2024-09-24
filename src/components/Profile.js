import React from "react"
export class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Ramesh",
                avatar_url: ""
            }
        }
        // console.log(this.props.name + "child constructor");
    }
    updateState() {

    }
    async componentDidMount() {
        // console.log(this.props.name + "child componentDidMount");
        const fetchData = await fetch("https://api.github.com/users/rameshwebdesigner");
        const json = await fetchData.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    render() {
        // console.log(this.props.name + "child Render");
        const { login: name, avatar_url } = this.state.userInfo;
        return (
            <div>
                <h1>{name}</h1>
                <p><img src={avatar_url} /></p>

            </div>
        )
    }
}