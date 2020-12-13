const express = require('express');
const router = express.Router();

const suitcaseCtrl = require('../controllers/suitcase.controller');
const commonService = require('./common');

router.post('/save', commonService.verifyToken, suitcaseCtrl.save);
router.post('/update', commonService.verifyToken, suitcaseCtrl.update);
router.post('/recommendations', commonService.verifyToken, suitcaseCtrl.fetchRecommendations);

module.exports = router;