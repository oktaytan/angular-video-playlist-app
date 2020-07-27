const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/Video.js');

const db = 'mongodb://localhost:27017/videolistdb';
mongoose.Promise = global.Promise;
mongoose.connect(
	db,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) {
			console.error('Error : ' + err);
		} else {
			console.log('Connected to mongoDB');
		}
	}
);

router.get('/videos', (req, res) => {
	Video.find({}).exec((err, videos) => {
		if (err) {
			console.log('Error : ' + err);
		} else {
			res.status(200).json(videos);
		}
	});
});

router.get('/videos/:id', (req, res) => {
	Video.findById(req.params.id).exec((err, video) => {
		if (err) {
			console.log('Error : ' + err);
		} else {
			res.status(200).json(video);
		}
	});
});

router.post('/videos', (req, res) => {
	let { title, url, description } = req.body;
	let newVideo = new Video();
	newVideo.title = title;
	newVideo.url = url;
	newVideo.description = description;

	newVideo.save((err, insertedVideo) => {
		if (err) {
			console.log('Error : ' + err);
		} else {
			res.status(201).json(insertedVideo);
		}
	});
});

router.put('/videos/:id', (req, res) => {
	let { title, url, description } = req.body;
	Video.findByIdAndUpdate(
		req.params.id,
		{ $set: { title, url, description } },
		{ new: true },
		(err, updatedVideo) => {
			if (err) {
				console.log('Error : ' + err);
			} else {
				res.status(200).json(updatedVideo);
			}
		}
	);
});

router.delete('/videos/:id', (req, res) => {
	Video.findByIdAndDelete(req.params.id, (err, deletedVideo) => {
		if (err) {
			console.log('Error : ' + err);
		} else {
			res.status(200).json(deletedVideo);
		}
	});
});

module.exports = router;
