const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const enableCors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(enableCors);

// Connect to the database
mongoose.connect('mongodb://localhost/real-estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Create a schema for user data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String
});

const propertySchema = new mongoose.Schema({
  propertyName: String,
  address: String,
  noOfUnits: String,
  floorPlan: String,
  pincode: Number,
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

// Define a route for user signup
app.post('/signup', async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: hashedPassword, phone });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
});

// Define a route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Create a JWT token
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'mysecret', { expiresIn: '12h' });
    res.status(200).json({ user:existingUser,token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Register property
app.post("/register-properties", async (req, res) => {
  const propertyData = req.body;
  console.log(propertyData);
  if (!propertyData.propertyName) {
    return res.status(400).json({ message: "propertyName is required." });
  }
  if (!propertyData.address) {
    return res.status(400).json({ message: "address is required." });
  }
  if (!propertyData.noOfUnits) {
    return res.status(400).json({ message: "noOfUnits is required." });
  }
  if (!propertyData.floorPlan) {
    return res.status(400).json({ message: "floorPlan is required." });
  }
  if (!propertyData.pincode && Number(propertyData.pincode)) {
    return res.status(400).json({ message: "pincode is invalid." });
  }

  const property = new Property(propertyData);
  await property.save();
  res.send(property);
});

//get all properties
app.get("/get-all-properties", async (req, res) => {
  try {
    const properties = await Property.find({});
    res.send(properties);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

//update proeperty by id
app.put("/update-property/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "id params is required." });
  }
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(property);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

//delete property by id
app.delete('/delete-property/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).send();
    }
    res.send(property);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });;
  }
})

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
