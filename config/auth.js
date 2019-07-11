const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    // Check for the token being sent in three different ways
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                next(err);
            } else {
                // It's a valid token, so add user to req
                req.user = decoded.user;
                next();
            } 
        });
    } else {
        next();
    }
};