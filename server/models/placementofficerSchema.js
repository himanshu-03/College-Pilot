const mongoose = require('mongoose');

const placementOfficerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  collegeName: {
    type: String,
    unqiue: true,
    required: true
  },
  collegeId:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('PlacementOfficer', placementOfficerSchema, 'placementOfficers');