const express = require('express');
const app = express();
const { Streams, Redeemables } = require('../model/index.js');


app.use(express.static(__dirname + '/dist'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/streams', (req, res, next) => {

    Streams.getAll((err, data) => {
        if (err) {
            console.log('Error, ', err);
            return res.status(404).send();
        }

        return res.status(200).send(data);
    })

})

app.get('/redeemables', (req, res, next) => {
    
    Redeemables.getAll((err, data) => {
        if (err) {
            console.log('Error, ', err);
            return res.status(404).send();
        }

        return res.status(200).send(data);
    })
})


const port = process.env.port || 3005;
app.listen(port, (err) => {
    console.log('Server started on port: ', port);
});
