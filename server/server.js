const express = require('express');
    history = require('connect-history-api-fallback');
    showdown = require('showdown')
    bodyParser = require('body-parser');
    path = require('path');
    fs = require('fs');

let counter = 0

const converter = new showdown.Converter()
    app = express()
    HTML = path.join(__dirname, 'public', 'build', 'index.html')
    postSavePath = path.join(__dirname, 'savedHtml');
    port = process.env.PORT || 8080
    user = 'mike';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function converMDtoHTML(req, res) {
    if (typeof req.body.content == 'undefined' || req.body.content == null) {
        res.json(['error', 'No data found']);
    } else {
        const text = req.body.content
            html = converter.makeHtml(text);

        fs.writeFile(`htmlSaved/post__${user}-${counter}.html`, html, err => {
            if (err) console.log(err)
        });

        counter++;
        res.json(['markdown', html]);
    }
}



app.use('/', express.static('public/build'));

app.get('/article', (req, res) => {
    res.sendFile(HTML)
})

app.post('/article-save', (req, res) => {
    converMDtoHTML(req, res)
})

app.post('/article-post', (req, res, next) => {
    converMDtoHTML(req, res)
})

app.post('/login', (req, res) => {})

app.listen(port, () => {
    console.log(`Server start localhost:${port}`)
})