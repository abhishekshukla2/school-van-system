const Admin = require("../models/Admin");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");





// Create Token

const createToken = (id)=>{


    return jwt.sign(

        {
            id:id
        },


        process.env.JWT_SECRET,


        {
            expiresIn:"7d"
        }


    );


};







// ============================
// REGISTER ADMIN
// ============================

exports.registerAdmin = async(req,res)=>{


    try{


        const {

            name,

            email,

            mobile,

            password


        } = req.body;





        const existAdmin = await Admin.findOne({

            email

        });





        if(existAdmin){


            return res.status(400).json({

                message:"Admin already exists"

            });


        }





        const hashPassword = await bcrypt.hash(

            password,

            10

        );





        const admin = await Admin.create({

            name,

            email,

            mobile,

            password:hashPassword

        });






        res.json({

            success:true,

            message:"Register Successful",

            admin

        });



    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ============================
// LOGIN ADMIN
// ============================

exports.loginAdmin = async(req,res)=>{


    try{


        const {

            email,

            password


        } = req.body;





        const admin = await Admin.findOne({

            email

        });





        if(!admin){


            return res.status(404).json({

                message:"Admin Not Found"

            });


        }






        const match = await bcrypt.compare(

            password,

            admin.password

        );





        if(!match){


            return res.status(401).json({

                message:"Wrong Password"

            });


        }






        const token = createToken(

            admin._id

        );






        res.json({

            success:true,

            token,

            admin

        });




    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







// ============================
// GOOGLE LOGIN SUCCESS
// ============================

exports.googleSuccess = async(req,res)=>{


    try{


        const admin = req.user;



        const token = createToken(

            admin._id

        );




        res.json({


            success:true,


            token,


            admin


        });



    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};