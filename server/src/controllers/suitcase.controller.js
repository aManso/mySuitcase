const recommendationModel = require('../models/recommendation');
const mongoose = require('mongoose');

const suitcaseCtrl = {};
const nPerPage = 10;


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

module.exports = suitcaseCtrl;