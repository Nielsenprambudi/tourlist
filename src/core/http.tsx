import {default as axios} from "axios";

const http = 
    axios.create({
        baseURL: 'http://192.53.172.221:3000/'
    });



export default http;

