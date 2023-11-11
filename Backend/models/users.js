const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: yes,
	},
	lastName: {
		type: String,
		required: yes,
	},
	password: {
		type: String,
		required: yes,
	},
	email: {
		type: String,
		required: yes,
	},
	title: {
		type: String,
	},
	list: {
		type: Array,
	}
});

const userModel = mongoose.model("users", UserSchema);
module.exports(userModel);