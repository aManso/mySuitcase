const express = require('express');
const router = express.Router();

const suitcaseCtrl = require('../controllers/suitcase.controller');

router.post('/save', suitcaseCtrl.save);

module.exports = router;