const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');


// Route 1: Get all the notes using GET
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
})

// Route 2: Add notes using POST
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

    // Route 3: Update notes using PUT
    router.put('/updatenotes/:id', fetchuser, async (req, res)=>{
        const{title,description,tag} = req.body;
        // Create a new Note object
        const newnote={};
        if(title){newnote.title = title};
        if(description){newnote.description = description};
        if(tag){newnote.tag = tag};

        // Find the note 
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not found")};
        
        // Check the user credentials
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
        res.json({note});
    })

    // Route 4: Delete Note
    router.delete('/deletenotes/:id', fetchuser, async (req, res)=>{
        const{title,description,tag} = req.body;
        
        
        
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not found")};
        
        // Check the user credentials
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success":"Note has been deleted",note:note});
    })

module.exports = router;