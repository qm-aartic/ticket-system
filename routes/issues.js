const express = require('express');
const {Issues,validate} = require('../models/issues');
const router = express.Router();

router.get('/', async (req,res) => {
    const issues = await Issues.find();
    res.send(issues);
})

router.post('/', async (req,res) => {

    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let newIssues = new Issues({
        typeOfIssue: req.body.typeOfIssue,
        desc: req.body.desc
    });

    newIssues = await newIssues.save();
    res.send(newIssues);
})

router.put('/:id', async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let issues;
    try {
        issues = await Issues.findByIdAndUpdate(req.params.id,{
            typeOfIssue: req.body.typeOfIssue,
            desc: req.body.desc
        }, { new: true })
    } catch (error) {
        if (!issues) return res.status(400).send('Wrong ID given');
    }

    res.send(issues);

})

router.delete('/:id', async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let issues;
    try {
        issues = await Issues.findByIdAndDelete(req.params.id);
    } catch (error) {
        if (!issues) return res.status(400).send("Wrong ID given")
    }

    res.send(issues);

})

module.exports = router;