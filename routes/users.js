const express = require('express');
const {Users,validate} = require('../models/users')
const router = express.Router();

router.get('/', async (req,res) => {
    const users = await Users.find();
    res.send(users);
})

router.post('/', async (req,res) => {

    // const { error } = validate(req.body);
    // if (error) return res.status(404).send(error.details[0].message);

    let newUsers = new Users({
        userID: req.body.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });

    newUsers = await newUsers.save();
    res.send(newUsers);
})

router.put('/:id', async (req,res) => {
    //const { error } = validate(req.body);
    //if (error) return res.status(404).send(error.details[0].message);

    let users;
    try {
        users = await Users.findByIdAndUpdate(req.params.id,{
            userID: req.body.userID,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }, { new: true })
    } catch (error) {
        if (!users) return res.status(400).send('Wrong ID given');
    }

    res.send(issues);

})

router.delete('/:id', async (req,res) => {
   // const { error } = validate(req.body);
    //if (error) return res.status(404).send(error.details[0].message);

    let users;
    try {
        users = await Users.findByIdAndDelete(req.params.id);
    } catch (error) {
        if (!users) return res.status(400).send("Wrong ID given")
    }

    res.send(users);

})

module.exports = router;