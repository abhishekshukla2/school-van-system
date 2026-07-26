const express = require("express");
const router = express.Router();

const Student = require("../models/Student");



// ==========================
// DASHBOARD DATA
// ==========================

router.get("/", async (req, res) => {

    try {


        const totalStudents =
            await Student.countDocuments();



        const morningStudents =
            await Student.countDocuments({
                shift: "Morning"
            });



        const afternoonStudents =
            await Student.countDocuments({
                shift: "Afternoon"
            });





        res.status(200).json({

            totalStudents,

            totalVans: 10,

            morningStudents,

            afternoonStudents

        });



    }
    catch(error) {


        res.status(500).json({

            message: error.message

        });


    }


});



module.exports = router;