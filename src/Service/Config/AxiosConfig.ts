import axios from 'axios';

const clientAPI = (url: string = '') =>
    axios.create({
        baseURL: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

    });

export default clientAPI;