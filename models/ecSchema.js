const mongoose = require('mongoose');
const Joi = require('joi');

const ecSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    status: {type: String, default: 'Pending'},
    date: {type: Date, default: Date.now}
});

const ECircumstance = mongoose.model('ECircumstance',ecSchema);

function validatEC(ecircumstance){
    const schema = {
        title: Joi.string().min(3).required(),
        desc: Joi.string().min(5).required()
    }
    const result = Joi.validate(ecircumstance, schema);
    return result;
}


module.exports.ECircumstance = ECircumstance;
module.exports.validate = validatEC;