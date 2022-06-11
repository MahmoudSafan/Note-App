class Generator {
    static id = 0;
    static generateId () {
        return ++this.id;
    }
}

module.exports = {
    Generator
}

