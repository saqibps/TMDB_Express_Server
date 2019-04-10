const express = require('express');
var cors = require('cors');
var app = express();
const path = require('path');
const request = require('request');
const PORT = process.env.PORT || 3001;
const API_KEY = '3be2b7f2ab99566767e0b3ee7ffc7a33';
var options = { method: 'GET', url: 'https://api.themoviedb.org/3/movie/upcoming',
qs: { page: '1', language: 'en-US', api_key: '3be2b7f2ab99566767e0b3ee7ffc7a33' }, body: '{}' };

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(cors())

app.get('/upcomingmovies', (req,res) => {
    console.log('Here comes request in ', req.url)
    request(options, (error, response, body) => {
        if (error) throw new Error(error)
        // console.log(body)
        res.send(body)
    })
})
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`)})
