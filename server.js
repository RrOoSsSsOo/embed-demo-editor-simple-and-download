const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(80, () => {
    console.log('Application started and Listening on port 80');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js');
});

app.get('/', function(req, res) {
    // Default Flat Score
    res.redirect('/56ae21579a127715a02901a6');
});

app.get('/:scoreId', function(req, res) {
    // scoreId in the URL
    scoreId = req.params.scoreId;
    res.render(__dirname + '/index.html', { scoreId: scoreId });
});
