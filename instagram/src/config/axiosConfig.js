import axios from 'axios';

const baseURL = {
    dev: "http://www.localhost:8080/",
    production: "http://instagramapp-env.eba-wnicnm3h.us-east-1.elasticbeanstalk.com/"
}

export default axios.create({
    baseURL:baseURL.dev,
    headers: {"ngrok-skip-browser-warning":"true"}
});