const path = require('path')
const router = require('express').Router()


    router.get('/notes', (request, response) => {
        console.log('content route')
        response.sendFile(path.join(__dirname, '../public/notes.html'))
    })

    router.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/index.html'))
    })
module.exports = router