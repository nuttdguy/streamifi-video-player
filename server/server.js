const express = require('express');
const app = express();
const db = require('../database/db-connection.js');


app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/streams', (req, res, next) => {

    db.connection.getModel('Streams', (err, data) => {
        if (err) {
            console.log('Error, ', err);
            res.status(404).send();
            return;
        }

        res.status(200).send(data);
        next();
    })

})

app.get('/redeemables', (req, res, next) => {
    
    db.connection.getModel('Redeemables', (err, data) => {
        if (err) {
            console.log('Error, ', err);
            res.status(404).send();
            return;
        }

        res.status(200).send(data);
        next();
    })
})


const port = process.env.port || 3005;
app.listen(port, (err) => {
    console.log('Server started on port: ', port);
});
