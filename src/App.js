import './App.css';
import { getAllBeers, getBeer, getRandomBeer } from './BeerAPI';
import { Component } from 'react';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount() {

    // Get 1 beer
    getBeer('5fb6a86265b9c209606e10e2').then(data => console.log(data));

    // Get all beers
    getAllBeers().then(data => this.setState({beers: data}));

    // Get a random beer
    getRandomBeer().then(data => console.log(data))
  }

  render() {
    return (<ul>{ this.state.beers.map((beer, index) => <li key={index}>{ beer.name }</li>) }</ul>)
  }
}