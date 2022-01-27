const express = require('express')
const router = express.Router();
const Note = require('../models/noteModel')


router.route('/create').post((req,res)=>    {
    const title = req.body.title;
    const data = req.body.data;
    const newNote = new Note({
        title,
        data
    })

    newNote.save()
})


router.route('/notes').get((req,res1) =>{
    Note.find( {},(err,res)=>{
        console.log(res);
        res1.send(res)
    } )
})


module.exports = router;