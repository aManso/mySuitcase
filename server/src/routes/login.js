const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/login.controller');

router.post('/', userCtrl.login);

module.exports = router;