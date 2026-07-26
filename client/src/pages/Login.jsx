import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";


function Login() {


    const navigate = useNavigate();



    // Agar already login hai to dashboard bhejo
    useEffect(()=>{


        const email = localStorage.getItem(
            "adminEmail"
        );


        if(email){

            navigate("/dashboard");

        }


    },[navigate]);





    // Google Login

    const loginWithGoogle = ()=>{


        window.location.href =

        "http://localhost:5000/api/auth/google";


    };





    return(

        <div className="login-page">


            <div className="login-card">



                <div className="school-logo">

                    🚐

                </div>




                <h1>

                    SHT PUBLIC SCHOOL

                </h1>



                <h2>

                    Van Management System

                </h2>



                <p>

                    Admin Login Portal

                </p>





                <button

                className="google-btn"

                onClick={loginWithGoogle}

                >


                    <span>

                        G

                    </span>


                    Continue With Google


                </button>




            </div>


        </div>


    );


}


export default Login;