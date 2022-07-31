import axios from "axios";

const baseUrl='http://localhost:5000';


const Token=JSON.parse(JSON.parse(localStorage?.getItem('persist:root')||'{}').user)?.accessToken;
 export const publicRequest=axios.create({baseURL:baseUrl});
 export const userRequest=axios.create({
    baseURL:baseUrl,
    headers: {
        token : `Bearer ${Token}`
        }
})