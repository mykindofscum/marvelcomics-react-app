let express = require('express');
let router = express.Router();
let collectionCtrl = require('../../controllers/collection');


// router.get('/api/collections', collectionCtrl.getCollection);
router.post('/', collectionCtrl.addCollection);

module.exports = router;