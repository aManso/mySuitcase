const jwt = require('jsonwebtoken');

// verify the tokens to valid http request
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        console.log(req.headers);
        return res.status(401).send('Unauthorized request')
    }
    // we take the text after the first space, at we expect 'bearer .....'
    let token = req.headers.authorization.split(' ')[1];
    // if there is not text, its also unauthorized
    if (token === null) {
        console.log(2);
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        console.log(3);
        return res.status(401).send('Unauthorized request')
    }
    console.log('token validated');
    req.userId = payload.subject;
    next();
}

module.exports.verifyToken = verifyToken;