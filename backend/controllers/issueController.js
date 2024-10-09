// controllers/issueController.js
const Issue = require('../models/Issue'); // Import the Issue model

// Report an issue
const reportIssue = async (req, res) => {
    try {
        const { issueType, description, location, lat, lng } = req.body;

        // Ensure the user is authenticated
        if (!req.user) {
            return res.status(403).json({ success: false, message: 'User not authenticated.' });
        }

        console.log('Request body:', req.body); // Log the request body
        console.log('Uploaded file:', req.file); // Log the uploaded file

        // Create a new issue
        const newIssue = new Issue({
            userId: req.user.id, // Assuming req.user.id contains the user's ID
            issueType,
            description,
            location,
            lat,
            lng,
            image: req.file ? req.file.path : null // Handle file upload
        });

        // Save the issue to the database
        await newIssue.save();

        return res.status(201).json({ success: true, message: 'Issue reported successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { reportIssue };
