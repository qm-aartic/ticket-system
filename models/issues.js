const mongoose = require('mongoose');
const Joi = require('joi');

const issues = new mongoose.Schema({
    typeOfIssue: {type: String, required: true},
    desc: {type: String, required: true},
    status: {type: String, default: 'pending'},
   
})

const Issues = mongoose.model('Issues',issues);

function validateIssues(issue){
    const schema = {
        typeOfIssue: Joi.string().min(5).required(),
        desc: Joi.string().min(5).required()
    }

    const result = Joi.validate(issue,schema);
    return result;
}

module.exports.Issues = Issues;
module.exports.validate = validateIssues;