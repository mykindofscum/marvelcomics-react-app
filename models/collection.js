const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: String,
    issueNumber: Number,
    date: Number,
    pages: Number,
    description: String,
    creator: String
});

module.exports = mongoose.model('Collection', collectionSchema);

