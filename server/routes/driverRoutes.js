const express = require("express");

const router = express.Router();


// Controller Import

const {

    addDriver,

    getDrivers,

    getDriverById,

    updateDriver,

    deleteDriver


} = require("../controllers/driverController");






// ==========================
// ADD DRIVER
// ==========================

router.post(

    "/",

    addDriver

);








// ==========================
// GET ALL DRIVERS
// ==========================

router.get(

    "/",

    getDrivers

);








// ==========================
// GET SINGLE DRIVER
// ==========================

router.get(

    "/:id",

    getDriverById

);








// ==========================
// UPDATE DRIVER
// ==========================

router.put(

    "/:id",

    updateDriver

);








// ==========================
// DELETE DRIVER
// ==========================

router.delete(

    "/:id",

    deleteDriver

);








module.exports = router;