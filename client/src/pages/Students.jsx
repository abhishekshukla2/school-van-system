import { useEffect, useState } from "react";

import API from "../api/axios";

import "./Students.css";


function Students(){


const [students,setStudents] = useState([]);

const [loading,setLoading] = useState(false);



const [form,setForm] = useState({

studentName:"",
className:"",
fatherName:"",
mobileNumber:"",
place:"",
shift:"Morning",
vanNumber:"",
vanUncle:""

});




// GET STUDENTS

const getStudents = async()=>{

try{

const res = await API.get("/students");

setStudents(res.data);


}
catch(error){

console.log(
"Get Error:",
error.response?.data || error.message
);

}

};





useEffect(()=>{

getStudents();

},[]);






// INPUT CHANGE

const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};








// ADD STUDENT

const addStudent=async(e)=>{


e.preventDefault();


try{


setLoading(true);



const res = await API.post(

"/students",

form

);



console.log(
res.data
);



alert(
"Student Added Successfully"
);




setForm({

studentName:"",
className:"",
fatherName:"",
mobileNumber:"",
place:"",
shift:"Morning",
vanNumber:"",
vanUncle:""

});



getStudents();



}

catch(error){


console.log(

"Add Error:",

error.response?.data || error.message

);


alert("Student Add Failed");


}

finally{

setLoading(false);

}


};








// DELETE

const deleteStudent=async(id)=>{


try{


await API.delete(
`/students/${id}`
);


getStudents();


}
catch(error){

console.log(error);

}


};







return(

<div className="students-container">



<div className="page-header">

<h1>
Student Management
</h1>

<p>
SHT Van Management Student Details
</p>

</div>





<div className="student-form-card">


<form

className="student-form"

onSubmit={addStudent}

>



<input

name="studentName"

placeholder="Student Name"

value={form.studentName}

onChange={handleChange}

required

/>





<input

name="className"

placeholder="Class"

value={form.className}

onChange={handleChange}

required

/>






<input

name="fatherName"

placeholder="Father Name"

value={form.fatherName}

onChange={handleChange}

required

/>






<input

name="mobileNumber"

placeholder="Mobile Number"

value={form.mobileNumber}

onChange={handleChange}

required

/>






<input

name="place"

placeholder="Address"

value={form.place}

onChange={handleChange}

required

/>







<input

name="vanUncle"

placeholder="Van Uncle Name"

value={form.vanUncle}

onChange={handleChange}

required

/>







<select

name="shift"

value={form.shift}

onChange={handleChange}

>


<option value="Morning">
Morning
</option>


<option value="Afternoon">
Afternoon
</option>


</select>







<select

name="vanNumber"

value={form.vanNumber}

onChange={handleChange}

required

>


<option value="">
Select Van
</option>



{

Array.from(
{length:10},
(_,index)=>(

<option

key={index}

value={index+1}

>

Van {index+1}

</option>

)

)

}


</select>







<button disabled={loading}>


{

loading ?

"Adding..." :

"Add Student"

}


</button>




</form>


</div>










<div className="table-card">


<table>


<thead>


<tr>

<th>Name</th>

<th>Class</th>

<th>Father</th>

<th>Mobile</th>

<th>Shift</th>

<th>Van</th>

<th>Van Uncle</th>

<th>Action</th>


</tr>


</thead>




<tbody>


{

students.length===0 ?


<tr>

<td colSpan="8">

No Student Found

</td>

</tr>


:


students.map((student)=>(


<tr key={student._id}>


<td>{student.studentName}</td>

<td>{student.className}</td>

<td>{student.fatherName}</td>

<td>{student.mobileNumber}</td>

<td>{student.shift}</td>

<td>Van {student.vanNumber}</td>

<td>{student.vanUncle}</td>


<td>


<button

className="delete-btn"

onClick={()=>deleteStudent(student._id)}

>

Delete

</button>


</td>


</tr>


))


}


</tbody>


</table>


</div>




</div>


)

}


export default Students;