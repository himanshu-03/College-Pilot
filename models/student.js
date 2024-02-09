const mongoose = require('mongoose');

const student = new mongoose.Schema({
    task: String
});

module.exports = mongoose.model('student', student, 'student');
