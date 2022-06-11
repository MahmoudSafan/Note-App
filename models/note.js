const uniqeId = require('../util/idGenerator');
const time = Date.now();
class Note {
    constructor(title, content, author, tags){
        this.title = title;
        this.content = content;
        this.author = author;
        this.tags = tags;
        this.createdAt = time;
        this.id = uniqeId.Generator.generateId();
    }

}
module.exports = Note