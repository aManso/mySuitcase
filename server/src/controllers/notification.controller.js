const webpush = require('web-push');
const subscriberModel = require('../models/subscriber');
const newsletterModel = require('../models/newsletter');

const notificationCtrl = {};

const vapidKeys = {
    "publicKey": "BN_Vaz62gKS1Mi6YS-6guChhEdg8J14bupDKzgh2rgeIcTwmGiDiblm96Emmkzlbakhk8Cy5sylcII65gVfHD7E",
    "privateKey":"392G87YkcT7HaZqMv4NVijN2boE0iU7TOpUALkUR5So"
}

const notificationPayLoad = {
    notification: {
        "title": "My suitcase news",
        "body": "Newsletter available!",
        "icon": "assets/img/blog/blog-2.png",
        "vibrate": [100, 50, 100],
        "data": {
            "dateOfArrival": Date.now(),
            "primaryKey": 1
        },
        "actions": [{
            "action": "explore",
            "title": "Go to the site"
        }]
    }
}

webpush.setVapidDetails(
    'mailto:example@mysuitcase.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

notificationCtrl.subscribe = async (req, res) => {
    console.log("adding subscriber in the ddbb ", req.body);
    const subscriber = new subscriberModel(req.body);
    const response = await subscriber.save();
    res.json(response);
};

notificationCtrl.send = async (req, res) => {    
    const subscribers = await subscriberModel.find({});
    console.log("The current number of subscribers is ", subscribers.length);
    
    console.log("fetching newsletter with id ", req.body.notificationId);
    let lastNewsletter = await newsletterModel.findOne({_id: req.body.notificationId});
    console.log("Notification to be sent: ", lastNewsletter);
    if (lastNewsletter) {
        try {
            Promise.all(subscribers.map((subscriber)=> {
                console.log('subscriber', subscriber);
                webpush.sendNotification(subscriber, JSON.stringify({notification: lastNewsletter}))            
            })).then(()=> {
                res.status(200).json({message: "Newsletter succesfully sent"})
            }).catch((err)=>{
                console.log("Error sending notification, reason: ", err);
                res.sendStatus(500);
            })
        } catch(e) {
            console.log("Error sending notification, reason: ", e);
            res.sendStatus(e.status);
        }
    }
};

notificationCtrl.addNotification = async (req, res) => {
    console.log("retrieved notification: ", req.body.notification);
    const newsletter = new newsletterModel(notificationCtrl.buildNotification(req.body.notification));
    const response = await newsletter.save();
    res.json(response);
};

notificationCtrl.fetchNotifications = async (req, res) => {
    console.log('fetching notifications');
    const newsletterOutput = await newsletterModel.find({ }).limit( 11 );

    res.json({list: newsletterOutput});
};

notificationCtrl.buildNotification = function(notification) {
    notification.data = {
        dateOfArrival: new Date(),
        primaryKey: 1
    };
    notification.vibrate = [100, 50, 100];
    console.log("adding notification in the ddbb: ", notification);
    return notification;
};

notificationCtrl.deleteNotification = async (req, res) => {
    const notificationId = req.params.id;
    console.log('removing notification: ', notificationId);
    const output = await newsletterModel.findByIdAndRemove(notificationId);
    console.log('notification removed: ', output);
    res.json({success: true});
};

module.exports = notificationCtrl;