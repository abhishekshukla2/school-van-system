const mongoose = require("mongoose");





const driverSchema = new mongoose.Schema(

{


    driverName:{


        type:String,

        required:true,

        trim:true


    },





    mobileNumber:{


        type:String,

        required:true,

        unique:true,

        trim:true


    },





    address:{


        type:String,

        default:""


    },





    licenseNumber:{


        type:String,

        default:""


    },





    assignedVan:{


        type:Number,

        min:1,

        max:10,

        default:null


    },





    status:{


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

}


);







module.exports = mongoose.model(

    "Driver",

    driverSchema

);