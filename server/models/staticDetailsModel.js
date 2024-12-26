const mongoose = require('mongoose');

const staticDetailsModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    videosrc: {
        type: String,
        required: true
    }
});

const StaticDetails = mongoose.model('staticdetail',staticDetailsModel);
module.exports = StaticDetails;