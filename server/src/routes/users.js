const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.get('/', verifyToken, userCtrl.getUsers);
router.get('/:id', verifyToken, userCtrl.getUser);
router.put('/:id', verifyToken, userCtrl.updateUser);
router.post('/', verifyToken, userCtrl.addUser);
router.delete('/:id', verifyToken, userCtrl.deleteUser);

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
    req.userId = payload.subject;
    next();
}

module.exports = router;