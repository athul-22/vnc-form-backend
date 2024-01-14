const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const FormModel = require('./model/Form.js');

const app = express();

const port = process.env.PORT || 3001;


// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json()); // Use built-in express.json middleware
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose.connect('mongodb+srv://user:pass@cluster0.f2x6wb9.mongodb.net/db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// const FormModel = mongoose.model('formMoel',FormModel)

const uploadFields = [
  { name: 'ephoto' },
  { name: 'showroomphoto' },
  { name: 'programbanner' },
  { name: 'participantslist' },
  { name: 'trainingphoto1' },
  { name: 'trainingphoto2' },
  { name: 'trainingphoto3' },
  { name: 'trainingphoto4' },
  { name: 'trainingphoto5' },
  { name: 'trainingphoto6' },
  { name: 'trainingphoto7' },
  { name: 'trainingphoto8' },
  { name: 'qasectionphoto' },
  { name: 'refreshsectionphoto' },
  { name: 'honouringphoto1' },
  { name: 'honouringphoto2' },
  { name: 'groupphoto' },
];

app.post('/api/submit', upload.fields(uploadFields), async (req, res) => {
  try {
    //EXTRACT FORM DATA FROM REQUEST BODY
    const { showroom, location, date } = req.body;

    if(!showroom || !location || !date){
      res.status(400).json({message: 'showroom, location, date all values are required'});
    }

    const images = {};

    uploadFields.forEach(({ name }) => {
      if (req.files[name]) {
        images[name] = req.files[name][0].buffer;
      }
    });

    const newForm = FormModel({
      showroom,
      location,
      date,
      ...images,
    });

    await newForm.save();
    console.log("SUCCESFULLY IMAGE UPLOADED");
    res.status(200).json({message: 'Form data submitted sucesfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'Internal server error'})
  }
})


app.get('/api/get',async(req,res)=>{
  try {
    // FETCH ONLY showroom location date _id
    const form = await FormModel.find({}, 'showroom location date _id');
    res.status(200).json(form);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'Internal server error'})
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
