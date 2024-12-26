const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
});

const Images = mongoose.model('image', imageSchema);
module.exports = Images;  
