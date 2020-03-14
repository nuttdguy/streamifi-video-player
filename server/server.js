const express = require('express');
const app = express();
const db = require('../database/db-connection.js');


app.get('/redeembles', (req, res, next) => {
    
    db.getModel('Redeemables', (err, data) => {
        if (err) {
            console.log('Error, ', err);
            res.status(404).send();
            return;
        }

        res.status(200).send(data);
    })
})


const port = process.env.port || 3005;
app.listen(port, (err) => {
    console.log('Server started on port: ', port);
});
