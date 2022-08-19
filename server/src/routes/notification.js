const express = require('express');
const router = express.Router();

const notificationCtrl = require('../controllers/notification.controller');

router.post('/send', notificationCtrl.send);
router.post('/subscribe', notificationCtrl.subscribe);

module.exports = router;