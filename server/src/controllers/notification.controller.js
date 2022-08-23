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
    const subscribers = await subscriberModel.find({ });
    console.log("The current number of subscribers is ", subscribers.length);
    
    let lastNewsletter = await newsletterModel.findOne().sort({created_at: -1});
    console.log("Notification to be sent: ", lastNewsletter);
    if (lastNewsletter) {
        Promise.all(subscribers.map((subscriber)=> {
            console.log('subscriber', subscriber);
            webpush.sendNotification(subscriber, JSON.stringify(lastNewsletter))
        })).then(()=> {
            res.status(200).json({message: "Newsletter succesfully sent"})
        }).catch((err)=>{
            console.log("Error sending notification, reason: ", err);
            res.sendStatus(500);
        })
    }
};

notificationCtrl.addNewsletter = async (req, res) => {
    console.log("adding newsletter in the ddbb ", req.body);
    const newsletter = new newsletterModel(req.body);
    const response = await newsletter.save();
    res.json(response);
};

module.exports = notificationCtrl;