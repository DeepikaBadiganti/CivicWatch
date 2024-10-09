require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router(); 
const { reportIssue } = require('./controllers/issueController'); // Import the controller
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());



// Import Routes
const authRoutes = require('./routes/authRoutes');
const issueApi = require('./routes/issueApi');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api', issueApi);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((err) => console.log(err));

const multer = require('multer');


// ---------------------deployement---------------------

const path = require("path");
app.use(
  express.static(path.join("D:", "My Projects", "BOVHackthon", "CivicIssues"))
);

// For all other routes, send the index.html file from the CivicIssues folder
app.get("*", (req, res) => {
  res.sendFile(
    path.join("D:", "My Projects", "BOVHackthon", "CivicIssues", "index.html")
  );
});
// ---------------------deployement---------------------


