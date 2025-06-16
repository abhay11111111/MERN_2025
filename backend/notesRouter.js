import exppres from "express"
import Note from "./schema/Notes.js";

const router = exppres.Router();


router.get('/', async(req, res) => {
    try {
        const notes = await Note.find().sort({createdAt : -1});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
    
})

router.post('/addNote', async(req, res) => {
    try {
        const {title , content} = req.body;
        console.log(title, content);
        const note = new Note( {title,content})
        await note.save();
        res.status(201).json({message : "Notes Created Successfully Ok!"});
    } catch (error) {
        res.send(error);
        res.status(500).json({error: "Internal Server Error"});
    }
    
})

router.put('/note/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const {title , content} = req.body;
        const note = await Note.findById(id);
        if(!note.id){
            res.status(403).json({message : "Note not Found"});
        }
        note.title = title;
        note.content = content;
        await note.save();
        res.status(200).json({message : "Notes Updated Successfully Ok!"});
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
    
})

router.get('/notes/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        if(note){
        res.status(200).json(note);
        }
    } catch (error) {
        res.status(500).json({message : "Error in Finding note with given id"});
    }
})

router.delete('/notes/drop/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const note = await Note.findByIdAndDelete(id);
        res.status(200).json({message : "Notes Deleted Successfully Ok!"});
    } catch (error) {
        res.send(error);
        res.status(500).json({error: "Internal Server Error"});
    }
    
})

export default router
