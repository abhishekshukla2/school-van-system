const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },

    mobile:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    password:{
        type:String,
        required:true
    },

    // Google Login
    googleId:{
        type:String,
        default:""
    },

    role:{
        type:String,
        default:"Admin"
    },

    otp:{
        type:String,
        default:""
    },

    otpExpire:{
        type:Date,
        default:null
    },

    isVerified:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Admin", adminSchema);