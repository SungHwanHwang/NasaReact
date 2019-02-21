import axios from 'axios';
//  axios 사용법
//  https://github.com/axios/axios
export function getAPOD(date = '') {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=W9Gh55nWWBsEGiOLkxunhkrWBQ6XJkAPAAkXdi9J&date=${date}');
}