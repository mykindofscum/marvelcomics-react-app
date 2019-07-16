const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    id: Number,
    title: String,
    issueNumber: Number,
    date: Number,
    pageCount: Number,
    description: String,
    creators: String,
    comic: [comicSchema],
    user: [userSchema]
});



module.exports = mongoose.model('Collection', collectionSchema);

