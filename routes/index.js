'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Michael Galos', subtitle: 'Welcome to My First Assignment'});
});

/* GET about page. */
router.get('/about', function (req, res) {
    res.render('about', { title: 'About Me' });
});

/* GET services page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

/* GET about page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/* GET about page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
