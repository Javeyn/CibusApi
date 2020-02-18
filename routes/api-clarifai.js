const Clarifai = require('clarifai');

const clarifai = new Clarifai.App({
    apiKey: '46b5b39ef59b479b98c0c4b745c479e8'
   });

clarifai.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
.then(generalModel => {
    return generalModel.predict("@@sampleTrain");
})
.then(response => {
    var concepts = response['outputs'][0]['data']['concepts']
})