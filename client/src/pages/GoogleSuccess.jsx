import { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";


function GoogleSuccess(){


const navigate = useNavigate();

const location = useLocation();



useEffect(()=>{


const params = new URLSearchParams(
    location.search
);


const email = params.get("email");



if(email){


localStorage.setItem(
    "adminEmail",
    email
);



localStorage.setItem(
    "token",
    "google-login-token"
);



navigate("/dashboard");


}



},[]);




return(

<div>

<h2>
Google Login Successful...
</h2>

</div>

)


}


export default GoogleSuccess;