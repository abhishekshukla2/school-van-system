import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Drivers.css";

function Drivers() {

    const [drivers, setDrivers] = useState([]);

    const [form, setForm] = useState({
        driverName: "",
        mobileNumber: "",
        licenseNumber: "",
        address: ""
    });

    // ==========================
    // GET ALL DRIVERS
    // ==========================

    const getDrivers = async () => {

        try {

            const res = await API.get("/drivers");

            setDrivers(res.data.drivers || []);

        } catch (error) {

            console.log("Get Driver Error:", error.response?.data || error.message);

        }

    };

    useEffect(() => {

        getDrivers();

    }, []);

    // ==========================
    // HANDLE INPUT
    // ==========================

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    // ==========================
    // ADD DRIVER
    // ==========================

    const addDriver = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/drivers", form);

            console.log(res.data);

            alert("Driver Added Successfully");

            setForm({

                driverName: "",
                mobileNumber: "",
                licenseNumber: "",
                address: ""

            });

            getDrivers();

        } catch (error) {

            console.log("Add Driver Error:", error.response?.data || error.message);

            alert(error.response?.data?.message || "Driver Add Failed");

        }

    };

    // ==========================
    // DELETE DRIVER
    // ==========================

    const deleteDriver = async (id) => {

        try {

            await API.delete(`/drivers/${id}`);

            getDrivers();

        } catch (error) {

            console.log("Delete Error:", error.response?.data || error.message);

        }

    };

    return (

        <div className="drivers-container">

            <div className="page-header">

                <h1>Driver Management</h1>

                <p>Manage School Driver Details</p>

            </div>

            <div className="driver-box">

                <form
                    className="driver-form"
                    onSubmit={addDriver}
                >

                    <input
                        type="text"
                        name="driverName"
                        placeholder="Driver Name"
                        value={form.driverName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={form.mobileNumber}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="licenseNumber"
                        placeholder="License Number"
                        value={form.licenseNumber}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        + Add Driver
                    </button>

                </form>

            </div>

            <div className="table-card">

                <table>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Mobile</th>
                            <th>License</th>
                            <th>Address</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            drivers.length > 0 ?

                                drivers.map((driver) => (

                                    <tr key={driver._id}>

                                        <td>{driver.driverName}</td>

                                        <td>{driver.mobileNumber}</td>

                                        <td>{driver.licenseNumber}</td>

                                        <td>{driver.address}</td>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() => deleteDriver(driver._id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td colSpan="5">

                                        No Drivers Found

                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Drivers;