const Note = require('../models/note');
const Memory = require('../models/memoryStorage');

const create = (req,res) =>{
    try{
        let title = req.body.title;
        let content = req.body.content;
        let author = req.body.author;
        let tags = req.body.tags;
        
        Memory.save(Memory.memory, new Note(title,content,author,tags))
        return res.status(201).send("Note Created Successfuly")
    }catch(err){
       return res.status(500).send({Error: 'Data Not Valid'})
    }
}

const update = (req,res) =>{
    try {
        let id = req.body.id;
        if(Memory.memory.getItem(id)){
            Memory.memory.removeItem(id);
            create(req,res);
        }else{
            throw new Error('Id not Found')
        }
    } catch (error) {
        res.status(404).send({Error: 'Id not found'})
    }
}

const remove = (req,res) =>{
    try {
        let id = req.body.id;
        if(Memory.memory.getItem(id)){
            Memory.memory.removeItem(id);
            return res.status(200).send("Note Deleted Successfully")
        }else{
            throw new Error('Id not Found')
        }
    } catch (error) {
        res.status(404).send({Error: 'Id not found'})
    }
}

const getAllNotes = (req,res)=>{
    try {
        let values = Memory.getValues(Memory.memory)
        return res.status(200).send(values);

    } catch (error) {
        return res.status(500).send({error})
        console.log(error);
    }
}

const getSingleNote = (req,res) =>{
    try {
        console.log(req.params.id);
        let noteId = req.params.id;
        let note  = Memory.memory.getItem(noteId);
        res.status(200).send(JSON.stringify(note))
    } catch (error) {
        res.status(404).send({Error: 'Data not founded'})
    }
}

module.exports = {
    create,
    update,
    remove,
    getAllNotes,
    getSingleNote,

}