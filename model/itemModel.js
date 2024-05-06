const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'must provide name'],
    },
    Price: {
        type: Number,
        required: [true, 'must provide price'],
    },
    Description: {
        type: String,
        required: [true, 'must provide description'],
    },
    Category: {
        type: String,
        required: [true, 'must provide category'],
    },
    Sizes: [String], // Assuming sizes is an array of strings
    Image: {
        type: String,
        default: null, // Assuming you want to default to null if no image is provided
    }
});

module.exports = mongoose.model('item', ItemSchema);
