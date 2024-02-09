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
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long!`
        }
    },
    contactNumber:{
        type:Number,
        required:true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    collegeName: {
        type: String,
        required: true,
        enum: ['TCET', 'DJSCE', 'SPIT', 'SFIT', 'VJTI']
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
        required:true,
    },
    XII:{
        type:Number,
        required:true,
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
        throw new Error('User does not exist in the database');
    }
    const isPasswordMatch = await bcrypt.compare(password, student.password);
    if (!isPasswordMatch) {
        throw new Error('Invalid password');
    }
    return student;
};

studentSchema.pre('save', async function(next) {
    const student = this;
    if (!student.isModified('password')) {
        return next();
    }
    try {
        student.password = await bcrypt.hash(student.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});


const Student = mongoose.model('Student', studentSchema,'Student');

module.exports = Student;