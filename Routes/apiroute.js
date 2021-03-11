const savedNote = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {

    //gets the notes api and passes the response through the db.json
    app.get('api/notes', (request, response) => response.json(savedNote));

    //takes the note input and posts it to the server
    app.post('api/notes', (request, response) => {
        savedNote.push(request.body)
        try {
            fs.writeFileSync('./db/db.json', JSON.stringify(savedNote, null, 4))
            response.json(true)
        }
        catch (error) {
            response.json(error)
        }
    })

    //
    app.delete('/api/notes/:id', (request, response) => {
        let deleteIndex = -1
        savedNote.forEach((note, index) => {
            if (note.id === request.params.id) {
                deleteIndex = index
            }
        })
        savedNote.splice(deleteIndex, 1)
        try {
            fs.writeFileSync('./db/db.json', JSON.stringify(savedNote, null, 4))
            response.json(true)
        }
        catch (error) {
            response.json(error)
        }
    })
}