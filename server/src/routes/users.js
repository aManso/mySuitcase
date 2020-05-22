const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.updateUser);
router.post('/', userCtrl.addUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;