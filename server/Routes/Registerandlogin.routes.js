//Author: Maitri Savla(mt588638@dal.ca) || Banner Id : B00899569

const express = require('express');
const userController = require('../Controllers/Registerandlogin.controller');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
