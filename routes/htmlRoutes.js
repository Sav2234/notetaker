const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/notes.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/index.html'))
})

module.exports = router;