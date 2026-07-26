const express = require("express");

const router = express.Router();


const {

addStudent,
getStudents,
deleteStudent

} = require("../controllers/studentController");




// POST - Add Student

router.post(
"/",
addStudent
);



// GET - All Students

router.get(
"/",
getStudents
);



// DELETE Student

router.delete(
"/:id",
deleteStudent
);



module.exports = router;