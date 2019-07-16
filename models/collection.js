const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: String,
    issueNumber: Number,
    date: Number,
    pageCount: Number,
    description: String,
    creators: String
});

module.exports = mongoose.model('Collection', collectionSchema);

