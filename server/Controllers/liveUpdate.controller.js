//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

const { log } = require('console');
const LiveUpdate = require('../Models/liveUpdate.model');

// view all live updates
const viewLiveUpdate = (req, res) => {
	const getLiveUpdate = async () => {
		const data = await LiveUpdate.find().sort({ date: -1 });
		res.json(data);
	};

	getLiveUpdate().catch((err) => {
		console.log(err);
	});
};

// get select live update from database
const viewLiveUpdateById = (req, res) => {
	const userId = parseInt(req.params.id);

	const getLiveUpdateById = async () => {
		const data = await LiveUpdate.find({ userId }).sort({ date: -1 });
		res.json(data);
	};

	getLiveUpdateById().catch((err) => {
		console.log(err);
	});
};

// create new live update
const createLiveUpdate = (req, res) => {
	const userId = req.body.userId;
	const userName = req.body.userName;
	const image =
		'https://trip-ease-server.onrender.com/Images/' + req.file.filename;

	const createLiveUpdate = async () => {
		const liveUpdate = new LiveUpdate({
			userId,
			userName,
			image,
			date: Date.now(),
		});
		const result = await liveUpdate.save();
		res.json(result);
	};
	createLiveUpdate().catch((err) => {
		console.log(err);
	});
};

module.exports = {
	viewLiveUpdate,
	viewLiveUpdateById,
	createLiveUpdate,
};
