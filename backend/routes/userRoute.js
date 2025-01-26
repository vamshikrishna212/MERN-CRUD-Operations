const express = require("express")
const mongoose = require('mongoose')
const user = require("../models/userModel");
const router = express.Router();



router.post("/", async (req, res) => {
    //var name=req.body.name
    const { name, email, age } = req.body;
    try {
        const user = require("../models/userModel");

        const userData = await user.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).json(userData)

    } catch (err) {
        res.status(400).json({ errorpost: err.message })

        console.log(err)
    }


});

router.get("/", async (req, res) => {
    try {
        const showall = await user.find();
        res.status(200).json(showall)

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log("err at get create")
    }


});

//get a single user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleuser = await user.findById({ _id: id });
        res.status(200).json(singleuser)

    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }


});

//delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deluser = await user.findByIdAndDelete({ _id: id });
        res.status(200).json(deluser)

    } catch (err) {
        res.status(500).json(err)
        console.log("err at delete ")
    }


});


//update or put or patch
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updateuser = await user.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateuser)

    } catch (err) {
        res.status(500).json(err)
        console.log("err at update ")
    }


});


module.exports = router;