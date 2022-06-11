const mem = require("memorystorage");

let memory = new mem('Note');

function getKeys(memory){
    let values = []
    var keys = Object.keys(memory);
    for(let i = 0; i< keys.length; i++){
        let key = keys(i)
        values.push(key)
    }
    return JSON.stringify(values)
}

function getValues(memory){
    let values = []
    for(let i = 0; i< memory.length; i++){
        let key = memory.key(i)
        let value = memory[key]
        values.push(value)
    }
    return JSON.stringify(values)
}

function validateData(data){
    if(!data.content || !data.title || !data.author || !data.id){
        return false;
    }else{
        return true;
    }
}

function save(memory, data){
    try{
        if(validateData(data)){
            memory.setItem(data.id,data);
        }else{
            throw new Error('Data not valid')
        }
    }catch(error){
        throw new Error('Data not valid')
    }
}

module.exports = {
    memory,
    save,
    getKeys,
    getValues,
}