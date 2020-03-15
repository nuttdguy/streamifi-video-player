const db = require('./db-connection.js');
const faker = require('faker');
const channeldata = require('./seed-data/channel-data.json');


// create stream objects
const createStreams = function() {
    const streams = [];

    channeldata.forEach(obj => {
        let stream = {
            stream_id: obj.id,
            token: obj.token,
            title: obj.name,
            audience: 'nothing to show ...',
            subheading: 'Nothing to show ...',
            url: `https://mixer.com/api/v1/channels/${obj.id}/manifest.m3u8`,
            created_at: new Date(obj.createdAt),
        }
        streams.push(stream);
    })

    return streams;
}

// create redeemable objects
const createRedeemables = function() {

    const redeemables = [];
    let counter = 0;

    for (let i = 0; i <= 100; i++) {
        const redeemable = {};
        counter = counter === 50 ? 0 : counter + 1;

        redeemable.img = '../dist/img/r'+counter+'.gif';
        redeemable.price = faker.commerce.price();
        redeemable.price_category = i % 2 === 0 ? 'Embers' : 'Sparks';

        redeemables.push(redeemable);

    }
    return redeemables;
}

// insert seed data
const insertRecords = function(tableName, data) {


    for (let i = 0; i < data.length; i++) {
        db.query(`INSERT INTO ${tableName} SET ?`, data[i], (err, result, fields) => {
            if (err) {
                console.log('error=', err);
                return err;
            }
        })
        if (i === data.length) {
            console.log('Done inserting records=', data.length, 'into ', tableName);
        }
    }

}

// create objects 
var arrayOfStreamObjects = createStreams();
var arrayOfredeemableObjects = createRedeemables();
insertRecords('Streams', arrayOfStreamObjects);
insertRecords('Redeemables', arrayOfredeemableObjects);

