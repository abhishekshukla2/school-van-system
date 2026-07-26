import { Routes, Route, Navigate } from "react-router-dom";


import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


import Login from "./pages/Login";
import GoogleSuccess from "./pages/GoogleSuccess";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Vans from "./pages/Vans";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";



function App(){


return(

<Routes>



<Route

path="/"

element={

<Navigate to="/login"/>

}

/>





<Route

path="/login"

element={

<Login/>

}

/>





<Route

path="/google-success"

element={

<GoogleSuccess/>

}

/>







<Route

path="/dashboard"

element={

<ProtectedRoute>

<>

<Navbar/>

<Dashboard/>

</>

</ProtectedRoute>

}

/>







<Route

path="/students"

element={

<ProtectedRoute>

<>

<Navbar/>

<Students/>

</>

</ProtectedRoute>

}

/>







<Route

path="/vans"

element={

<ProtectedRoute>

<>

<Navbar/>

<Vans/>

</>

</ProtectedRoute>

}

/>







<Route

path="/drivers"

element={

<ProtectedRoute>

<>

<Navbar/>

<Drivers/>

</>

</ProtectedRoute>

}

/>







<Route

path="/reports"

element={

<ProtectedRoute>

<>

<Navbar/>

<Reports/>

</>

</ProtectedRoute>

}

/>





</Routes>

)


}



export default App;