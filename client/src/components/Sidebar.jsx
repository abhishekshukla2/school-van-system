import { Link } from "react-router-dom";

import "./Sidebar.css";



function Sidebar(){


return(

<div className="sidebar">



<h2>

SHT Van

</h2>




<ul>


<li>

<Link to="/dashboard">

Dashboard

</Link>

</li>





<li>

<Link to="/students">

Students

</Link>

</li>





<li>

<Link to="/vans">

Vans

</Link>

</li>





<li>

<Link to="/drivers">

Drivers

</Link>

</li>





<li>

<Link to="/reports">

Reports

</Link>

</li>





</ul>





</div>

)


}



export default Sidebar;