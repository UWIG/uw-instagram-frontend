import axios from 'axios';

const baseURL = {
    dev: "http://www.localhost:8080/",
    production: ""
}

export default axios.create({
    baseURL:baseURL.dev,
    headers: {"ngrok-skip-browser-warning":"true"}
});
