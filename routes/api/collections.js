let express = require('express');
let router = express.Router();
let collectionCtrl = require('../../controllers/collection');

router.get('/api/comics', collectionCtrl.getCollection);
router.post('/api/comics', collectionCtrl.addComic);

module.exports = router;