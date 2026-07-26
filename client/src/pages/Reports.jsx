import { useEffect, useState } from "react";

import API from "../api/axios";

import "./Reports.css";



function Reports(){


const [students,setStudents] = useState([]);

const [drivers,setDrivers] = useState([]);





const getReports = async()=>{


try{


const studentRes = await API.get("/students");

const driverRes = await API.get("/drivers");



setStudents(studentRes.data);

setDrivers(driverRes.data);



}

catch(error){

console.log(error);

}



};






useEffect(()=>{


getReports();


},[]);







const vanReport = Array.from({length:10},(_,index)=>{


const count = students.filter(

student => student.vanNumber == index+1

).length;



return{

van:index+1,

students:count

}


});







const morningStudents = students.filter(

student=>student.shift==="Morning"

).length;





const afternoonStudents = students.filter(

student=>student.shift==="Afternoon"

).length;







return(


<div className="reports-container">





<div className="page-header">


<h1>
Reports
</h1>


<p>
School Van Management Reports
</p>


</div>







<div className="report-cards">



<div className="report-card">

<h3>
Total Students
</h3>

<h2>
{students.length}
</h2>

</div>





<div className="report-card">

<h3>
Total Drivers
</h3>

<h2>
{drivers.length}
</h2>

</div>






<div className="report-card">

<h3>
Morning Shift
</h3>

<h2>
{morningStudents}
</h2>

</div>






<div className="report-card">

<h3>
Afternoon Shift
</h3>

<h2>
{afternoonStudents}
</h2>

</div>



</div>









<div className="van-report">


<h2>
Van Wise Student Report
</h2>




<table>


<thead>

<tr>

<th>
Van Number
</th>


<th>
Total Students
</th>


</tr>


</thead>




<tbody>



{

vanReport.map((item)=>(


<tr key={item.van}>


<td>
Van {item.van}
</td>


<td>
{item.students}
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


export default Reports;