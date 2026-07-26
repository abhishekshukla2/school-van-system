import axios from "axios";


const API = axios.create({

    baseURL:"https://school-van-system.onrender.com/api",

    withCredentials:true

});




// Token automatically send karega

API.interceptors.request.use(

(config)=>{


const token = localStorage.getItem("token");


if(token){

config.headers.Authorization = 
`Bearer ${token}`;

}


return config;


},


(error)=>{


return Promise.reject(error);


}

);



export default API;