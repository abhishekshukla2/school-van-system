import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        // Clear Login Data
        localStorage.removeItem("adminEmail");
        localStorage.removeItem("token");
        localStorage.clear();

        // Redirect to Login Page
        navigate("/login");

    };

    return (

        <nav className="navbar">

            <div className="logo">
                SHT Van Management
            </div>

            <div className="nav-links">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/students">
                    Students
                </Link>

                <Link to="/vans">
                    Vans
                </Link>

                <Link to="/drivers">
                    Drivers
                </Link>

                <Link to="/reports">
                    Reports
                </Link>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;