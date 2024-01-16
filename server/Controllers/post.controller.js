//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

const Post = require('../Models/post.model');

// view all posts from database
const viewPost = (req, res) => {
	const getPost = async () => {
		const data = await Post.find().sort({ date: -1 });
		res.json(data);
	};

	getPost().catch((err) => {
		console.log(err);
	});
};

// view posts of particular user
const viewPostByUserId = (req, res) => {
	const userId = parseInt(req.params.id);

	const getPost = async () => {
		const data = await Post.find({ userId }).sort({ date: -1 });
		res.json(data);
	};

	getPost().catch((err) => {
		console.log(err);
	});
};

// view details of selected post
const viewPostByPostId = (req, res) => {
	const postId = req.params.id;

	const getPostById = async () => {
		const data = await Post.findOne({ _id: postId });
		res.json(data);
	};

	getPostById().catch((err) => {
		console.log(err);
	});
};
// delete selected post
const deletePostByPostId = (req, res) => {
	const postId = req.params.id;
	const deletePost = async () => {
		const data = await Post.findByIdAndRemove({ _id: postId });
		const updatedPost = await Post.find({ userId: '123' });
		if (data !== undefined) {
			res.json(updatedPost);
			// res.json(updatedPost);
		} else {
			res.send('No post found with given ID');
		}
	};
	deletePost().catch((err) => {
		console.log(err);
	});
};
//update post with new data
const updatePostByPostId = (req, res) => {
	const _id = req.params.id;
	const { location, description } = req.body;

	const updatePost = async () => {
		let doc = await Post.findOneAndUpdate(
			{ _id: _id },
			{ $set: { location: location, description: description } },
			{
				new: true,
			}
		);
		res.status(200).json(doc);
	};
	updatePost().catch((err) => {
		console.log(err);
	});
};

// create new post and save to database
const createPost = (req, res) => {
	const userId = req.body.userId;
	const userName = req.body.userName;
	const image =
		'https://trip-ease-server.onrender.com/Images/' + req.file.filename;
	const location = req.body.location;
	const description = req.body.description;

	const savePost = async () => {
		const post = new Post({
			userId,
			userName,
			location,
			image,
			description,
			date: Date.now(),
		});
		await post.save();
		const data = await Post.find({ userId }).sort({ date: -1 });
		res.json(data);
	};
	savePost().catch((err) => {
		console.log(err);
	});
};

module.exports = {
	viewPost,
	viewPostByUserId,
	createPost,
	deletePostByPostId,
	updatePostByPostId,
	viewPostByPostId,
};
