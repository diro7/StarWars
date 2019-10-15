var Scraper = require('images-scraper');
var express = require('express');
var cors = require('cors')
const fs = require('fs')
var app = express();
app.use(cors());

const cache = require('./cache.json')

console.log(cache)

app.get('/', function(req, res) {
    if (cache.hasOwnProperty(req.query.q)) {
        res.send({ url: cache[req.query.q] })

    } else {


        let google = new Scraper.Google({
            keyword: '"' + req.query.q + '"',
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:64.0) Gecko/20100101 Firefox/64.0', // the user agent
            limit: 2,
            puppeteer: {
                headless: true
            },
            advanced: {
                color: undefined // options: color, gray, trans
            }
        });

        (async() => {
            const results = await google.start();
            //const response = req.query.q + ':' + results[0]['url']
            console.log(results)
            cache[req.query.q] = results[1]['url']
            fs.writeFile('./cache.json', JSON.stringify(cache), function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("File saved successfully!");
            });
            console.log(cache)
            res.send({ url: cache[req.query.q] })
        })()
    }
});

app.listen(3000, function() {
    console.log('listening on port 3000!');
})