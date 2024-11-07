const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Debug environment variable loading
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Skilled Partner API!');
});

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});