const express = require('express');
const { Streams, Redeemables, Embers, Wallet } = require('../model/index.js');

var app = express();

app.use(express.static(__dirname + './dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
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


app.get('/embers', (req, res, next) => {
    
    Embers.getAll((err, data) => {
        if (err) {
            console.log('Error, ', err);
            return res.status(404).send();
        }

        return res.status(200).send(data);
    })
})


app.get('/wallet/:id', (req, res, next) => {
    const id = req.params.id;
    
    Wallet.getOne(id, (err, data) => {
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


