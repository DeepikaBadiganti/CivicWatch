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

app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Serve other HTML files based on their URL
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../about.html"));
});

app.get("/report-issue", (req, res) => {
  res.sendFile(path.join(__dirname, "../blog.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../blogPage.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../dashboard.html"));
});

app.get("/FAQ", (req, res) => {
  res.sendFile(path.join(__dirname, "../FAQ.html"));
});

app.get("/features", (req, res) => {
  res.sendFile(path.join(__dirname, "../feature.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../login.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../service.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../signup.html"));
});

app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "../team.html"));
});

app.get("/testimonial", (req, res) => {
  res.sendFile(path.join(__dirname, "../testimonial.html"));
});

// Handle 404 errors by serving 404.html
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../404.html"));
});


// ---------------------deployement---------------------


