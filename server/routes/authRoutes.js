const express = require("express");
const router = express.Router();

const passport = require("passport");

const {
    registerAdmin,
    loginAdmin
} = require("../controllers/authController");


// ==========================
// GOOGLE LOGIN START
// ==========================

router.get(
    "/google",
    passport.authenticate(
        "google",
        {
            scope: [
                "profile",
                "email"
            ],
            prompt: "select_account"
        }
    )
);


// ==========================
// GOOGLE CALLBACK
// ==========================

router.get(
    "/google/callback",

    passport.authenticate(
        "google",
        {
            session: false,
            failureRedirect: "http://localhost:5173/login"
        }
    ),

    (req, res) => {

        const admin = req.user;

        res.redirect(
            "http://localhost:5173/google-success?email=" +
            admin.email
        );

    }
);


// ==========================
// NORMAL REGISTER
// ==========================

router.post(
    "/register",
    registerAdmin
);


// ==========================
// NORMAL LOGIN
// ==========================

router.post(
    "/login",
    loginAdmin
);

module.exports = router;