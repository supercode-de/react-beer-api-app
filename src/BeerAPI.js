import axios from 'axios';

const API_BASE = 'https://ih-beers-api2.herokuapp.com/beers/';

export const getAllBeers = () => {
    return axios.get(API_BASE).then(data => data.data);
}

export const getBeer = (id) => {
    return axios.get(API_BASE + id).then(data => data.data);
}

export const getRandomBeer = () => {
    return axios.get(API_BASE + '/random').then(data => data.data);
}