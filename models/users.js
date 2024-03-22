const mongoose = require('mongoose');
const Joi = require('joi');

const users = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    department: {type: String, required: false},
    moduleID: {type: String, required: false},
    urgentEC: {type: Boolean, required: true},
    amountOfEC: {type: Number, required: false},
})

const Users = mongoose.model('Users',users);

// function validateIssues(user){
//     const schema = {
//         typeOfIssue: Joi.string().min(5).required(),
//         desc: Joi.string().min(5).required()
//     }

//     const result = Joi.validate(user,schema);
//     return result;
// }

module.exports.Users = Users;
// module.exports.validate = validateIssues;