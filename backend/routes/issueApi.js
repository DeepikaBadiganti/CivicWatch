// Import necessary modules
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { reportIssue } = require('../controllers/issueController');
const authMiddleware = require('../middleware/auth');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Uploads will be saved in the uploads directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the original filename
    },
});

const upload = multer({ storage: storage });

// Define the report issue route with file upload support
router.post('/report-issue',authMiddleware, upload.single('imageUpload'), reportIssue);

module.exports = router;