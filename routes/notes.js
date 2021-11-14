const notes = require('express').Router();
const fs = require('fs');
const util = require('util');

notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// Promise version of fs.readFile
notes.get('/:notes_id', (req, res) => {
    const noteId = req.params.notes_id;
    readFromFile('/db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((notes) => notes.notes_id === noteId);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that ID');
        });
});

notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all notes except the one with the ID provided in the URL
            const result = json.filter((notes) => notes.note_id !== noteId);

            // Save that array to the filesystem
            writeToFile('./db/notes.json', result);

            // Respond to the DELETE request
            res.json(`Item ${noteId} has been deleted 🗑️`);
        });
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    console.log(req.body);

    const { username, topic, notes } = req.body;

    if (req.body) {
        const newnote = {
            user,
            title,
            note_text,
            note_id: uuidv4(),
        };

        readAndAppend(newnote, './db/notes.json');
        res.json(`note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;