import axios from 'axios';

const baseURL = {
    dev: "http://www.localhost:8080/",
    production: "http://instagramappbackend-env.eba-zqmnsdju.ca-central-1.elasticbeanstalk.com/"
}

export default axios.create({
    baseURL:baseURL.dev,
    headers: {"ngrok-skip-browser-warning":"true"}
});