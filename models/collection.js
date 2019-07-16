const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    comicId: Number,
    title: String,
    issueNumber: Number,
    date: Number,
    pageCount: Number,
    description: String,
    creators: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});



module.exports = mongoose.model('Collection', collectionSchema);