const suitcaseCtrl = {};

suitcaseCtrl.save = async (req, res) => {
    // res.send('Hello world');
    console.log('suitcase data: ', req.body.suitcase);
    console.log('suitcaseName: ', req.userId);
    let suitcase = suitcaseCtrl.setUpSuitcaseToBeSaved(req.body.suitcase);
    const suitcaseModel = require('../models/suitcase')(req.userId);
    suitcase = new suitcaseModel(suitcase);
    console.log('suitcase modeled to be saved', suitcase);
    const response = await suitcase.save();
    console.log('Suitcase saved');
    return res.json({response});
};

suitcaseCtrl.setUpSuitcaseToBeSaved = function(suitcase) {
    suitcase.metadata = {
        creationDate: new Date(),
    };
    return suitcase;
};

module.exports = suitcaseCtrl;