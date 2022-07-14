const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const port = process.env.PORT || 8080

const app = express();
const HTML = path.join(__dirname, 'public', 'build', 'index.html');

app.use('/', express.static('public/build'));

app.get('/article', (req, res) => {
    res.sendFile(HTML)
})

app.listen(port, () => {
    console.log('Server start localhost:8081')
})