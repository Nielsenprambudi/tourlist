import {default as axios} from "axios";

const http = 
    axios.create({
        baseURL: 'http://restapi.adequateshop.com/'
    });



export default http;

