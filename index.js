const express = require('express');
const path = require('path')
const request = require('request');
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(path.join(_dirname, 'static')));


app.get('/', function(req, res){
    res.sendFile(path.join(_dirname + '/static/index.html'))
})


let uri = 'https://api.fortnitetracker.com/v1/profile/';
// https://api.fortnitetracker.com/v1/profile/{platform}/{user-name}
// platform xb1 pc psn
// api key 851219f9-e156-4ae6-b95d-bda59512b3db
app.post('/', function(req, res){
    request.get(uri + 'platform' + '/' + 'epicusername', {
        headers: {
            'TRN-Api-Key' : '851219f9-e156-4ae6-b95d-bda59512b3db'
        }, function(err, res, body){
            console.log(body)
            res.json(body)
        }
    })
})

const port = process.env.PORT || 3000

app.listen(port)