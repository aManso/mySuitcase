const express = require('express');
const router = express.Router();

const suitcaseCtrl = require('../controllers/suitcase.controller');
const commonService = require('./common');

router.post('/save', commonService.verifyToken, suitcaseCtrl.save);

module.exports = router;