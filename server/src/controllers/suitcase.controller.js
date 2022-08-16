const recommendationModel = require('../models/recommendation');
const mongoose = require('mongoose');

const suitcaseCtrl = {};
const nPerPage = 10;


suitcaseCtrl.save = async (req, res) => {

    const suitcaseModel = require('../models/suitcase')(req.userId);
    const totalOutput = await suitcaseModel.find({ }).limit( 11 );

    if (totalOutput.length > 9) {
        console.log(`Ya hay un total de ${totalOutput.length}`);
        return res.status(401).send("maxSuitcasesReached");
    } else {
        console.log(`Creadas ${totalOutput.length} hay sitio`);
        console.log('suitcase data: ', req.body.suitcase);
        console.log('suitcaseId: ', req.userId);
        let suitcase = suitcaseCtrl.setUpSuitcaseToBeSaved(req.body.suitcase);
        suitcase = new suitcaseModel(suitcase);
        console.log('suitcase modeled to be saved', suitcase);
        const response = await suitcase.save();
        console.log('Suitcase saved');
        return res.json({response});
    }
};

suitcaseCtrl.update = async (req, res) => {
    console.log('suitcase data: ', req.body.suitcase);
    let suitcase = suitcaseCtrl.setUpSuitcaseToBeSaved(req.body.suitcase);
    const suitcaseModel = require('../models/suitcase')(req.userId);
    suitcase = new suitcaseModel(suitcase);
    console.log('suitcase modeled to be updated', suitcase);
    const id  = req.body.suitcase._id;
    const response = await suitcaseModel.findByIdAndUpdate(id, {$set: suitcase}, {new: true });
    console.log('Suitcase updated');
    return res.json({response});
};

suitcaseCtrl.setUpSuitcaseToBeSaved = function(suitcase) {
    suitcase.metadata = {
        creationDate: new Date(),
    };
    // make sure the name is stored in lowercase to be fetch if trying to access straight from the url
    suitcase.name = suitcase.name.toLowerCase();
    return suitcase;
};

suitcaseCtrl.fetchRecommendations = async (req, res) => {
    console.log('recommendation options: ', req.body.options);
    let recommendations = {};
    for (let i = 0; i < Object.keys(req.body.options).length; i++) {
        const optionKey = Object.keys(req.body.options)[i];
        if (req.body.options[optionKey].selected) {
            if (optionKey !== 'sport') {
                recommendations[optionKey] = {
                    selected: true,
                    currentPage: req.body.options[optionKey].currentPage,
                    currentPriority: req.body.options[optionKey].currentPriority,
                    items: await recommendationModel[optionKey].find({prio: req.body.options[optionKey].currentPriority})
                        .skip(req.body.pageNumber > 0 ? ((req.body.pageNumber - 1) * nPerPage) : 0)
                        .limit(req.body.limit || nPerPage),
                };
            } else {
                recommendations[optionKey] = {
                    selected: true,
                    currentPage: req.body.options[optionKey].currentPage,
                    currentPriority: req.body.options[optionKey].currentPriority,
                    items: await recommendationModel[optionKey].find({sport_name: { $in: req.body.options[optionKey].sports }})
                        .skip(req.body.pageNumber > 0 ? ((req.body.pageNumber - 1) * nPerPage) : 0)
                        .limit(req.body.limit || nPerPage),
                    sports: req.body.options[optionKey].sports
                };
            }
        }
    }
    console.log(recommendations);
    res.json(recommendations);
};

suitcaseCtrl.overview = async (req, res) => {
    console.log('overview data: ', req.body);
    console.log('suitcaseName: ', req.userId);
    const suitcaseModel = require('../models/suitcase')(req.userId);
    const overviewOutput = await suitcaseModel.find({ }).limit( 11 );
    console.log('overview data: ', overviewOutput);
    res.json({list: overviewOutput});
};

suitcaseCtrl.remove = async (req, res) => {
    console.log('removing suitcase: ', req.userId);
    const suitcaseModel = require('../models/suitcase')(req.userId);
    const collectionId  = req.body.id;
    const overviewOutput = await suitcaseModel.findByIdAndRemove(collectionId);
    console.log('suitcase removed: ', overviewOutput);
    res.json({success: true});
};

suitcaseCtrl.getSuitcase = async (req, res) => {
    const suitcaseDetailModel = require('../models/suitcase')(req.userId);
    console.log('searching suitcase with name: '+ req.params.name);
    const suitcase = await suitcaseDetailModel.findOne(
        {$or: [
            { name: req.params.name},
            { name: req.params.name.split('_').join(' ')}
        ]});
    console.log(suitcase);
    res.json(suitcase);
};

module.exports = suitcaseCtrl;