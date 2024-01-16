//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

const express = require('express');
const postController = require('../Controllers/post.controller');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'Assets/Images');
	},
	filename: function (req, file, cb) {
		const suffixForImage = Date.now() + Math.round(Math.random() * 1e9) + '-';
		cb(null, suffixForImage + file.originalname.split(' ').join(''));
	},
});

const upload = multer({ storage });

router.get('/view', postController.viewPost);
router.get('/view/:id', postController.viewPostByUserId);
router.get('/viewById/:id', postController.viewPostByPostId);
router.post('/create', upload.single('postImage'), postController.createPost);
router.post('/delete/:id', postController.deletePostByPostId);
router.put('/update/:id', postController.updatePostByPostId);

module.exports = router;
