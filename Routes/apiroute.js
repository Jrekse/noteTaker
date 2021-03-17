const savedNote = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router()



    //gets the notes api and passes the response through the db.json
    router.get('/notes', (request, response) => {
        console.log('we are in api response')
        response.json(savedNote)
        
    });

    //takes the note input and posts it to the server
    router.post('/notes', (request, response) => {
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
    router.delete('/notes/:id', (request, response) => {
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
 module.exports = router