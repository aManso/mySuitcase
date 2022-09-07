const express = require('express');
const router = express.Router();

const notificationCtrl = require('../controllers/notification.controller');
const commonService = require('./common');

router.get('/', commonService.verifyToken, notificationCtrl.fetchNotifications);
router.post('/send', commonService.verifyToken, notificationCtrl.send);
router.post('/subscribe', notificationCtrl.subscribe);
router.post('/add', notificationCtrl.addNotification);
router.delete('/delete/:id', notificationCtrl.deleteNotification);

module.exports = router;