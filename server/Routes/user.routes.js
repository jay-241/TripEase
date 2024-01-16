//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757
//Author: Dhrupa Patel(dh409430@dal.ca) || Banner Id: B00912610

const express = require('express');
const userController = require('../Controllers/user.controller');
const router = express.Router();

router.get('/view', userController.viewUser);
router.get('/search', userController.getUserBySearch);
router.get('/view/:id', userController.viewUserById);
router.post('/create', userController.createUser);
router.post('/update/:id', userController.updateUserById);

module.exports = router;
