const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);

router.get('/protected', authMiddleware, (req, res) => {
    res.send(`Welcome, ${req.user.email}`);
});

module.exports = router;
