import React from "react"


class Componentid extends React.Component {

	constructor() {
		super()
		this.state = {
			loading: true,
			item: {}
		}
	}

	componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/item/" + this.props.id + ".json?print=pretty")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    item: data,
                    loading: false
                })
            })
    }


	render() {
		
		return(
			<div>
				{this.state.loading || !this.state.item ? (
					<div>loading...</div> 
					) : (
					<div>
						<div>{this.state.item.title}</div>
					</div>
					)}
			</div>
		)
	}
}

export default Componentid
