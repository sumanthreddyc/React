import React from "react"


class Componentid extends React.Component {

	constructor() {
		super()
		this.state = {
			item: {}
		}
	}

	componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/item/{this.props.id}.json?print=pretty")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    item: data
                })
            })
    }


	render() {
		return(
			<div>
				<p>{this.props.id}</p>
				<p>{this.state.item.title}</p>
			</div>
		)
	}
}

export default Componentid
