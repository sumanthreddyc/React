import React from "react"


class Componentid extends React.Component {

	constructor() {
		super()
		this.state = {
			item: []
		}
	}

	componentWillReceiveProps(nextProps) {
        fetch("https://hacker-news.firebaseio.com/v0/item/{this.nextProps.id}.json?print=pretty")
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
				<p>{this.state.item.by}</p>
			</div>
		)
	}
}

export default Componentid
