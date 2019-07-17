const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: String,
    issueNumber: Number,
    pageCount: Number,
    description: String,
    // thumbnail: Mixed,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Collection', collectionSchema);