const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/login.controller');
const commonService = require('./common');

router.post('/', userCtrl.login);

module.exports = router;
