const Student = require("../models/Student");
const Van = require("../models/Van");
const Driver = require("../models/Driver");



// ==========================
// DASHBOARD DATA
// ==========================

exports.getDashboard = async (req, res) => {

    try {


        // Total Students
        const totalStudents = await Student.countDocuments();



        // Total Vans
        const totalVans = await Van.countDocuments();



        // Total Drivers
        const totalDrivers = await Driver.countDocuments();




        // Morning Students
        const morningStudents = await Student.countDocuments({

            shift:"Morning"

        });




        // Afternoon Students
        const afternoonStudents = await Student.countDocuments({

            shift:"Afternoon"

        });






        // Van Wise Student Count

        const vanWise = await Student.aggregate([

            {
                $group:{

                    _id:"$vanNumber",

                    totalStudents:{
                        $sum:1
                    }

                }

            },

            {
                $sort:{
                    _id:1
                }
            }

        ]);






        res.json({

            success:true,

            dashboard:{

                totalStudents,

                totalVans,

                totalDrivers,

                morningStudents,

                afternoonStudents,

                vanWise

            }

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};