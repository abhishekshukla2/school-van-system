import { useEffect, useState } from "react";

import API from "../api/axios";

import "./Vans.css";


function Vans(){


    const [vans,setVans] = useState([]);


    const [form,setForm] = useState({

        vanNumber:"",
        vanName:"",
        vanUncle:"",
        driverMobile:"",
        route:""

    });





    // ==========================
    // GET ALL VANS
    // ==========================

    const getVans = async()=>{


        try{


            const res = await API.get("/vans");


            setVans(

                res.data.vans || []

            );


        }
        catch(error){


            console.log(
                "Get Van Error:",
                error.response?.data || error.message
            );


        }


    };







    useEffect(()=>{


        getVans();


    },[]);







    // ==========================
    // INPUT CHANGE
    // ==========================


    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };








    // ==========================
    // ADD VAN
    // ==========================


    const addVan = async(e)=>{


        e.preventDefault();



        try{


            const res = await API.post(

                "/vans",

                form

            );



            console.log(
                res.data
            );



            setForm({

                vanNumber:"",
                vanName:"",
                vanUncle:"",
                driverMobile:"",
                route:""

            });



            getVans();



        }
        catch(error){


            console.log(

                "Add Van Error:",
                error.response?.data || error.message

            );


        }


    };








    // ==========================
    // DELETE VAN
    // ==========================


    const deleteVan = async(id)=>{


        try{


            await API.delete(

                `/vans/${id}`

            );



            getVans();



        }
        catch(error){


            console.log(

                "Delete Error:",
                error.response?.data || error.message

            );


        }


    };







    return(


        <div className="vans-container">



            <div className="page-header">


                <h1>

                    Van Management

                </h1>


                <p>

                    Manage School Vans And Van Uncle Details

                </p>


            </div>







            <div className="van-form-card">


                <form

                className="van-form"

                onSubmit={addVan}

                >




                <input

                type="number"

                name="vanNumber"

                placeholder="Van Number 1-10"

                value={form.vanNumber}

                onChange={handleChange}

                required

                />





                <input

                type="text"

                name="vanName"

                placeholder="Van Name"

                value={form.vanName}

                onChange={handleChange}

                required

                />







                <input

                type="text"

                name="vanUncle"

                placeholder="Van Uncle Name"

                value={form.vanUncle}

                onChange={handleChange}

                required

                />







                <input

                type="text"

                name="driverMobile"

                placeholder="Driver Mobile"

                value={form.driverMobile}

                onChange={handleChange}

                required

                />







                <input

                type="text"

                name="route"

                placeholder="Route Name"

                value={form.route}

                onChange={handleChange}

                />







                <button type="submit">

                    + Add Van

                </button>




                </form>


            </div>








            <div className="van-grid">



            {

                vans.map((van)=>(


                    <div

                    className="van-card"

                    key={van._id}

                    >



                    <h2>

                    Van {van.vanNumber}

                    </h2>





                    <p>

                    <b>
                    Name:
                    </b>

                    {" "}

                    {van.vanName}

                    </p>







                    <p>

                    <b>
                    Van Uncle:
                    </b>

                    {" "}

                    {van.vanUncle}

                    </p>







                    <p>

                    <b>
                    Mobile:
                    </b>

                    {" "}

                    {van.driverMobile}

                    </p>







                    <p>

                    <b>
                    Route:
                    </b>

                    {" "}

                    {van.route}

                    </p>








                    <p>

                    <b>
                    Seats:
                    </b>

                    {" "}

                    {van.totalSeats}

                    </p>








                    <button

                    className="delete-btn"

                    onClick={()=>deleteVan(van._id)}

                    >

                    Delete

                    </button>





                    </div>



                ))


            }



            </div>





        </div>


    );


}


export default Vans;