const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();


const app = express();



// =======================
// Passport Config
// =======================

require("./config/passport");




// =======================
// Middleware
// =======================


app.use(cors({

    origin:"http://localhost:5173",

    credentials:true

}));


app.use(express.json());


app.use(
    express.urlencoded({

        extended:true

    })
);



app.use(passport.initialize());







// =======================
// ROUTES
// =======================



// =======================
// AUTH ROUTE
// =======================

const authRoutes = require("./routes/authRoutes");


app.use(

    "/api/auth",

    authRoutes

);








// =======================
// STUDENT ROUTE
// =======================

const studentRoutes = require("./routes/studentRoutes");


app.use(

    "/api/students",

    studentRoutes

);








// =======================
// VAN ROUTE
// =======================

const vanRoutes = require("./routes/vanRoutes");


app.use(

    "/api/vans",

    vanRoutes

);









// =======================
// DRIVER ROUTE ✅ ADD
// =======================

const driverRoutes = require("./routes/driverRoutes");


app.use(

    "/api/drivers",

    driverRoutes

);








// =======================
// DASHBOARD ROUTE
// =======================

const dashboardRoutes = require("./routes/dashboardRoutes");


app.use(

    "/api/dashboard",

    dashboardRoutes

);









// =======================
// TEST ROUTE
// =======================


app.get("/",(req,res)=>{


    res.send(

        "SHT Van Management Server Running"

    );


});





// VAN TEST

app.get("/test-van",(req,res)=>{


    res.json({

        message:"Van API Working"

    });


});






// DRIVER TEST

app.get("/test-driver",(req,res)=>{


    res.json({

        message:"Driver API Working"

    });


});








// =======================
// DATABASE CONNECTION
// =======================


mongoose

.connect(process.env.MONGO_URI)


.then(()=>{


    console.log(

        "✅ MongoDB Connected"

    );



    app.listen(

        process.env.PORT || 5000,


        ()=>{


            console.log(

                `🚀 Server Running On Port ${process.env.PORT || 5000}`

            );


        }

    );


})


.catch((error)=>{


    console.log(

        "❌ MongoDB Error"

    );


    console.log(error);


});