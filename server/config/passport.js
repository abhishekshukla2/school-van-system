const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const Admin = require("../models/Admin");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/auth/google/callback"
        },

        async (accessToken, refreshToken, profile, done) => {
            try {

                const email = profile.emails[0].value;

                let admin = await Admin.findOne({
                    email: email
                });

                if (!admin) {

                    admin = await Admin.create({

                        name: profile.displayName,

                        email: email,

                        googleId: profile.id,

                        mobile: "0000000000",

                        password: "google-login"

                    });

                } else {

                    // Agar admin pehle se hai aur googleId nahi hai
                    if (!admin.googleId) {
                        admin.googleId = profile.id;
                        await admin.save();
                    }

                }

                return done(null, admin);

            } catch (error) {

                return done(error, null);

            }
        }
    )
);

module.exports = passport;