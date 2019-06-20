import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactmyburger-911cd.firebaseio.com/'
});

export default instance;