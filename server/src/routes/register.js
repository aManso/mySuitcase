const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/register.controller');

router.post('/', userCtrl.register);

module.exports = router;