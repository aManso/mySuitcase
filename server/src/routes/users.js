const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');
let commonService = require('./common');

router.get('/', commonService.verifyToken, userCtrl.getUsers);
router.get('/:id', commonService.verifyToken, userCtrl.getUser);
router.put('/update/:id', commonService.verifyToken, userCtrl.updateUser);
router.post('/', commonService.verifyToken, userCtrl.addUser);
router.delete('/:id', commonService.verifyToken, userCtrl.deleteUser);

module.exports = router;