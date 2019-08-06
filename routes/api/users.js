const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const User = require('../../models/user');
let collectionCtrl = require('../../controllers/collection');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);



/*---------- Protected Routes ----------*/

router.use(require('../../config/auth'));


/*------------ Helper Functions --------------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized' });
}

module.exports = router;