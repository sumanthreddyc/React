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
                    topstoriesid: data.results
                })
            })
    }

    render() {
      const storyid = for(var i = 0; i < 500; i++){
                return <li>{this.state.topstoriesid[i]}</li>
        return (
            <div>
              <Componentid id = "storyid" />
            </div>
        )
    }
}

export default App
