const mongoose = require('mongoose');

const Form = new mongoose.Schema({
  showroom: {
    type: String,
    required: false,
    
    maxlength: 255,
  },
  location: {
    type: String,
    required: false,
    
    maxlength: 255,
  },
  date: {
    type: String,
    required: false,
    
    maxlength: 255,
  },
  ephoto: {
    type: Buffer,
    required: false,
    
  },
  showroomphoto: {
    type: Buffer,
    required: false,
    
  },
  programbanner: {
    type: Buffer,
    required: false,
    
  },
  participantslist: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto1: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto2: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto3: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto4: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto5: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto6: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto7: {
    type: Buffer,
    required: false,
    
  },
  trainingphoto8: {
    type: Buffer,
    required: false,
    
  },
  qasectionphoto: {
    type: Buffer,
    required: false,
    
  },
  refreshsectionphoto: {
    type: Buffer,
    required: false,
    
  },
  honouringphoto1: {
    type: Buffer,
    required: false,
    
  },
  honouringphoto2: {
    type: Buffer,
    required: false,
    
  },
  groupphoto: {
    type: Buffer,
    required: false,
    
  },
});

// Add indexing if needed
Form.index({ showroom: 1, location: 1, date: 1 });

const FormModel = mongoose.model('FormModel', Form);

module.exports = FormModel;
