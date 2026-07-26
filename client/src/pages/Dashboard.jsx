import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";


function Dashboard() {


    const navigate = useNavigate();


    const [email,setEmail] = useState("");



    const [data,setData] = useState({

        totalStudents:0,

        totalVans:10,

        morningStudents:0,

        afternoonStudents:0

    });





    // Login Check + Dashboard Data

    useEffect(()=>{


        const adminEmail = localStorage.getItem(
            "adminEmail"
        );



        if(!adminEmail){


            navigate("/login");


            return;


        }
        else{


            setEmail(adminEmail);


        }






        const getDashboardData = async()=>{


            try{


                const res = await axios.get(

                    "http://localhost:5000/api/dashboard"

                );



                setData(res.data);



            }
            catch(error){


                console.log(
                    "Dashboard API Error",
                    error
                );


            }


        };



        getDashboardData();



    },[navigate]);






    return (

        <div className="dashboard-page">


            <div className="dashboard-content">



                <h1>

                    SHT Van Management

                </h1>



                <h2>

                    Admin Dashboard

                </h2>






                <div className="cards">



                    <div className="card">


                        <h3>
                            Total Students
                        </h3>


                        <p>
                            {data.totalStudents}
                        </p>


                        <span>
                            Registered Students
                        </span>


                    </div>






                    <div className="card">


                        <h3>
                            Total Vans
                        </h3>


                        <p>
                            {data.totalVans}
                        </p>


                        <span>
                            Active Vans
                        </span>


                    </div>







                    <div className="card">


                        <h3>
                            Morning Shift
                        </h3>


                        <p>
                            {data.morningStudents}
                        </p>


                        <span>
                            Students
                        </span>


                    </div>







                    <div className="card">


                        <h3>
                            Afternoon Shift
                        </h3>


                        <p>
                            {data.afternoonStudents}
                        </p>


                        <span>
                            Students
                        </span>


                    </div>





                </div>







                <div className="welcome-box">



                    <h3>

                        Welcome Admin 👋

                    </h3>



                    <p>

                        Login Email:

                        <b>
                            {" "}
                            {email}
                        </b>


                    </p>



                </div>





            </div>


        </div>

    );


}


export default Dashboard;