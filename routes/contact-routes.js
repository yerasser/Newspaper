const express = require('express');
const router = express.Router();
const { getContact } = require('../controllers/contact-controller')

const Socials = require('../models/post');
const createPath = require('../helpers/create-path');

router.get('/contact', getContact);

module.exports = router;