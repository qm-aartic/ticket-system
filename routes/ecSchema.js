const express = require('express');
const { ECircumstance,validate } = require('../models/ecSchema');
const router = express.Router();
// testing commit. This will be committed 

router.get('/', async (req,res) => {
    const ECS = await ECircumstance.find();
    res.send(ECS);
})

router.get('/:id', async (req,res) => {
    let ECS;
    try {
        ECS = await ECircumstance.findById(req.params.id);
    } catch (error) {
        if (!ECS) return res.status(404).send("Ticket with given ID was not found");

    }

    res.send(ECS);
})

router.post('/', async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let newEC = new ECircumstance({
        title: req.body.title,
        desc: req.body.desc,
    });

    newEC = await newEC.save();

    res.send(newEC);
})

router.put('/:id', async (req,res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let ECS;
    try {
        ECS = await ECircumstance.findByIdAndUpdate(req.params.id , {
            title: req.body.title,
            desc: req.body.desc,
        }, { new: true });
        
    } catch (error) {
        if (!ECS) return res.status(404).send("Ticket with given ID was not found");

    }
    
    res.send(ECS);

})

router.delete('/:id', async (req,res) => {

    let ECS;
    try {
        ECS = await ECircumstance.findByIdAndDelete(req.params.id);
    } catch (error) {
        if (!ECS) return res.status(404).send("Ticket with given ID was not found");

    }

    res.send(ECS);

})

module.exports = router;