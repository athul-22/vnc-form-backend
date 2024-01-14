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
    type: String,
    required: false,
  },
  showroomphoto: {
    type: String,
    required: false,
  },
  programbanner: {
    type: String,
    required: false,
  },
  participantslist: {
    type: String,
    required: false,
  },
  trainingphoto1: {
    type: String,
    required: false,
  },
  trainingphoto2: {
    type: String,
    required: false,
  },
  trainingphoto3: {
    type: String,
    required: false,
  },
  trainingphoto4: {
    type: String,
    required: false,
  },
  trainingphoto5: {
    type: String,
    required: false,
  },
  trainingphoto6: {
    type: String,
    required: false,
  },
  trainingphoto7: {
    type: String,
    required: false,
  },
  trainingphoto8: {
    type: String,
    required: false,
  },
  qasectionphoto: {
    type: String,
    required: false,
  },
  refreshsectionphoto: {
    type: String,
    required: false,
  },
  honouringphoto1: {
    type: String,
    required: false,
  },
  honouringphoto2: {
    type: String,
    required: false,
  },
  groupphoto: {
    type: String,
    required: false,
  },
});

// Add indexing if needed
Form.index({ showroom: 1, location: 1, date: 1 });

const FormModel = mongoose.model('FormModel', Form);

module.exports = FormModel;
