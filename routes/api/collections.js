let express = require('express');
let router = express.Router();
let collectionCtrl = require('../../controllers/collection');

router.use(require('../../config/auth'));
router.get('/', collectionCtrl.getCollection);
router.post('/', collectionCtrl.addCollection);

module.exports = router;