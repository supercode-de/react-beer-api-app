import React, { Component } from 'react'
import { getAllBeers } from '../BeerAPI'
import Card from './Card';

export default class All extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        getAllBeers().then(response => {
            this.setState({
                beers: response
            })
        })
    }

    render() {
        return (
            <div>
                { this.state.beers.map((beer, i) => <Card key={i} data={beer} />)}
            </div>
        )
    }
}
