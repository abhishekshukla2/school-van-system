const Driver = require("../models/Driver");




// ==========================
// ADD DRIVER
// ==========================

exports.addDriver = async(req,res)=>{


    try{


        const driver = await Driver.create(

            req.body

        );




        res.status(201).json({

            success:true,

            message:"Driver Added Successfully",

            driver

        });




    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// ==========================
// GET ALL DRIVERS
// ==========================

exports.getDrivers = async(req,res)=>{


    try{


        const drivers = await Driver.find()

        .sort({

            createdAt:-1

        });





        res.json({

            success:true,

            count:drivers.length,

            drivers

        });




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ==========================
// GET SINGLE DRIVER
// ==========================

exports.getDriverById = async(req,res)=>{


    try{


        const driver = await Driver.findById(

            req.params.id

        );





        if(!driver){


            return res.status(404).json({

                message:"Driver Not Found"

            });


        }





        res.json(driver);




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ==========================
// UPDATE DRIVER
// ==========================

exports.updateDriver = async(req,res)=>{


    try{


        const driver = await Driver.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );






        res.json({

            success:true,

            message:"Driver Updated Successfully",

            driver

        });




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ==========================
// DELETE DRIVER
// ==========================

exports.deleteDriver = async(req,res)=>{


    try{


        await Driver.findByIdAndDelete(

            req.params.id

        );





        res.json({

            success:true,

            message:"Driver Deleted Successfully"

        });




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};