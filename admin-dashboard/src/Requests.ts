import axios from "axios";

const baseUrl='https://ecommerce-abderrahim.herokuapp.com/';


const Token=localStorage.length>0?JSON.parse(JSON.parse(localStorage?.getItem('persist:root')||'{}')?.user)?.user?.accessToken:' ';
console.log(JSON.parse(JSON.parse(localStorage?.getItem('persist:root')||'{}')?.user).user);

 export const publicRequest=axios.create({baseURL:baseUrl});
 export const userRequest=axios.create({
    baseURL:baseUrl,
    headers: {
        token : `Bearer ${Token}`
        }
})