const Van = require("../models/Van");




// ==========================
// ADD VAN
// ==========================

exports.addVan = async(req,res)=>{


    try{


        const van = await Van.create(

            req.body

        );



        res.status(201).json({

            success:true,

            message:"Van Added Successfully",

            van

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
// GET ALL VANS
// ==========================

exports.getVans = async(req,res)=>{


    try{


        const vans = await Van.find()

        .sort({

            vanNumber:1

        });





        res.json({

            success:true,

            count:vans.length,

            vans

        });




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ==========================
// GET SINGLE VAN
// ==========================

exports.getVanById = async(req,res)=>{


    try{


        const van = await Van.findById(

            req.params.id

        );





        if(!van){


            return res.status(404).json({

                message:"Van Not Found"

            });


        }






        res.json(van);




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ==========================
// UPDATE VAN
// ==========================

exports.updateVan = async(req,res)=>{


    try{


        const van = await Van.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );






        res.json({

            success:true,

            message:"Van Updated Successfully",

            van

        });




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// ==========================
// DELETE VAN
// ==========================

exports.deleteVan = async(req,res)=>{


    try{


        await Van.findByIdAndDelete(

            req.params.id

        );





        res.json({

            success:true,

            message:"Van Deleted Successfully"

        });




    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};