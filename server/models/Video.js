const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Video', VideoSchema, 'videos');
