const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 2222;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.inhkcc7.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email is already registered' });
  }
  // In a real app, you should hash the password before saving it
  const user = new User({ username, email, password });

  try {
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});