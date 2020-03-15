import React, {Component} from "react"
import Componentid from "./Componentid"

class App extends Component {
    constructor() {
        super()
        this.state = {
            topstoriesid: []
        }
    }

    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    topstoriesid: data
                })
            })
    }

    render() {
        console.log("this.state", this.state);
        let storyid = []
        for (var i = 0; i < 500; i++) {
            storyid.push(<Componentid id={this.state.topstoriesid[i]}/>)
        }
        return (
            <div>
                {storyid}
            </div>
        )
    }
}

export default App
