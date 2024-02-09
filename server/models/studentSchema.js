const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    collegeName: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    rollNumber:{
        type:Number,
        required:true
    },
    X:{
        type:Number,
        required:true
    },
    XII:{
        type:Number,
        required:true
    },
    cgpa:{
        type:Number,
        required:true
    },
    year:{
        type:String,
        enum:['T.E','B.E'],
        required:true
    },

    placed:{
        type:Boolean,
        required:true
    }
});

const Student = mongoose.model('Student', studentSchema,'Student');

module.exports = Student;