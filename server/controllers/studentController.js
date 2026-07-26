const Student = require("../models/Student");



// ADD STUDENT

exports.addStudent = async(req,res)=>{


try{


console.log("DATA:",req.body);



const student = await Student.create(req.body);



res.status(201).json({

message:"Student Added Successfully",

student

});


}

catch(error){


console.log(error);


res.status(500).json({

message:error.message

});


}


};






// GET STUDENTS


exports.getStudents = async(req,res)=>{


try{


const students = await Student.find();


res.status(200).json(students);



}

catch(error){


res.status(500).json({

message:error.message

});


}


};







// DELETE STUDENT


exports.deleteStudent = async(req,res)=>{


try{


await Student.findByIdAndDelete(
req.params.id
);



res.json({

message:"Student Deleted"

});


}

catch(error){


res.status(500).json({

message:error.message

});


}


};