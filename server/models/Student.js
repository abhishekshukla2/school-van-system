const mongoose = require("mongoose");



const studentSchema = new mongoose.Schema(

{

    studentName:{

        type:String,

        required:true,

        trim:true

    },



    className:{

        type:String,

        required:true,

        trim:true

    },



    fatherName:{

        type:String,

        required:true,

        trim:true

    },



    mobileNumber:{

        type:String,

        required:true,

        trim:true

    },



    place:{

        type:String,

        required:true,

        trim:true

    },



    shift:{

        type:String,

        enum:[

            "Morning",

            "Afternoon"

        ],

        default:"Morning"

    },



    vanNumber:{


        type:Number,

        required:true,

        min:1,

        max:10


    },



    vanUncle:{


        type:String,

        required:true,

        trim:true


    }



},


{

timestamps:true

}


);



module.exports = mongoose.model(

"Student",

studentSchema

);