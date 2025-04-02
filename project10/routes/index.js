const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('pages/home');
});

// Route for the login page
router.get('/login', (req, res) => {
    res.render('pages/login');
});

// Route for the registration page
router.get('/register', (req, res) => {
    res.render('pages/register');
});

// Route for the dashboard page
router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});

module.exports = router;
