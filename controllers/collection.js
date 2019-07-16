const Collection = require('../models/collection');
const User = require('../models/user');

module.exports = {
    addCollection,
    getCollection
};

function addCollection(req, res) {
    console.log('user: ', req.user) 
    User.findById(req.body.id, function(err, foundUser) {
        if (err) console.log(err);
    foundUser.collection.push(req.body.comicId);
    foundUser.save(function (err) {
        if (err) console.log(err);
        res.status(200).json(req.body.comicId);
        });
    });
}

    // req to add to collection, finduser by id push their
    
    // id into the collection []

    // associate to the user
    // define which fields you want to use for the database
    // new Collection and then .save()
function getCollection(req, res) {
    Collection.find({}, function(err, collection) {
        if (err) console.log(err);
        res.status(200).json(collection);
    });
}

