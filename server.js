const {response} = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('./notes.html', getNotes);
app.get('./index.html', getIndex);

app.get('/api/notes', (request, response) => {
    response.json('./db/db.json');
})

app.post('/api/notes', (request, response) => {
    console.log(request.body);
    response.json('./db/db.json');
})

function getNotes(){
    response.status(200).sendFile('./public/notes.html')
}

function getIndex(){
    response.status(200).sendFile('./public/index.html')
}

app.listen(PORT, () =>
    console.log(`It Work. ${PORT}`))