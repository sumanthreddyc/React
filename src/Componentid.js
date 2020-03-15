import React from "react"


class Componentid extends React.Component {
    constructor() {
        super()
        this.state = {
            id: null,
            loading: true,
            item: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (!!nextProps.id) {
            this.setState({id: nextProps.id});

            fetch("https://hacker-news.firebaseio.com/v0/item/" + nextProps.id + ".json?print=pretty")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        item: data,
                        loading: false
                    })
                })
        }
    }

    render() {
        console.log("this.state", this.state);
        return (
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
