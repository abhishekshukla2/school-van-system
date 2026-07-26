const express = require("express");

const router = express.Router();


// Controller Import

const {

    addVan,

    getVans,

    getVanById,

    updateVan,

    deleteVan


} = require("../controllers/vanController");





// ==========================
// ADD VAN
// ==========================

router.post(

    "/",

    addVan

);







// ==========================
// GET ALL VANS
// ==========================

router.get(

    "/",

    getVans

);








// ==========================
// GET SINGLE VAN
// ==========================

router.get(

    "/:id",

    getVanById

);








// ==========================
// UPDATE VAN
// ==========================

router.put(

    "/:id",

    updateVan

);








// ==========================
// DELETE VAN
// ==========================

router.delete(

    "/:id",

    deleteVan

);







module.exports = router;