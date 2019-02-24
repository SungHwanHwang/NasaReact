import axios from 'axios';
//  axios 사용법
//  https://github.com/axios/axios
export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=gUUPvWchwgA7H4Fx0c7UOqXQndND6qhS9aYi1Aos&date=${date}`);
}