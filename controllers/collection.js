const Collection = require('../models/post');

module.exports = {
    addComic
};



function addComic(req, res) {
    console.log('Add to Collection');
    // associate to the user
    // define which fields youwant to use for the database
    // new Collection and then .save()
    Collection.create(req.body, function(err, colleciton) {
        console.log(collection);
    })
}