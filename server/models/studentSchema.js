const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

studentSchema.statics.findByEmailAndPassword = async function(email, password) {
    const student = await this.findOne({ email });
    if (!student) {
      throw new Error('Invalid email or password');
    }
    const isPasswordMatch = await bcrypt.compare(password, student.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid email or password');
    }
    return student;
  };

  studentSchema.pre('save', async function(next) {
    const student = this;
    student.password = await bcrypt.hash(student.password, 10);
    next();
  });

const Student = mongoose.model('Student', studentSchema,'Student');

module.exports = Student;