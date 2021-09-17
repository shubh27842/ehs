import {API} from "../backend.js";
import axios from "axios";

export const getCategory = (token) => {
   return  axios.get(`${API}category/getCategory`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res)=>{
        return res.data.category;
    }).catch((err)=> {
        console.log(err);
    });
}