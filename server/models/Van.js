const mongoose = require("mongoose");


const vanSchema = new mongoose.Schema({

    vanNumber: {

        type:Number,

        required:true,

        unique:true,

        min:1,

        max:10

    },


    vanName: {

        type:String,

        required:true

    },


    vanUncle: {

        type:String,

        required:true

    },


    driverMobile: {

        type:String,

        required:true

    },


    route: {

        type:String,

        default:""

    },


    totalSeats: {

        type:Number,

        default:20

    },


    status: {

        type:String,

        enum:[
            "Active",
            "Inactive"
        ],

        default:"Active"

    }


},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Van",
    vanSchema
);