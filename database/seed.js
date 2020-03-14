const db = require('./db-connection.js');
const faker = require('faker');
const channeldata = require('./channel-data.json');
const recordings = require('./recordings-data.json');


// functions to create objects
const extractChannelIntoObject = function() {
    let dataResult = [];

    channeldata.forEach(obj => {
        let r = {
            stream_id: obj.id,
            stream_token: obj.token,
            stream_title: obj.name,
            stream_audience: 'nothing to show ...',
            stream_subheading: 'Nothing to show ...',
            stream_Url: `https://mixer.com/api/v1/channels/${obj.id}/manifest.m3u8`,
            stream_created_at: new Date(obj.createdAt),
        }
        dataResult.push(r);
    })

    // console.log(dataResult);
    return dataResult;
}

const createRedeemablesData = function() {
    const redeemablesArr = [];
    for (let i = 0; i <= 100; i++) {
        const obj = {};

        obj.redeemables_img = faker.image.food();
        obj.redeemables_price = faker.commerce.price();
        obj.redeemables_price_category = i % 2 === 0 ? 'Embers' : 'Sparks';
        redeemablesArr.push(obj);

    }
    return redeemablesArr;
}

const extractRecordingsIntoObject = function() {
    let dataResult = [];

    recordings.forEach(obj => {
        // obj = JSON.parse(obj);
        let r = {
            stream_id: obj.id,
            stream_name: obj.name,
            stream_duration: obj.duration,
            createdAt: obj.createdAt,
            stream_channelId: obj.channelId,
            stream_Url: obj.vods[0].baseUrl,
            stream_format: obj.vods[0].format,
            stream_title: obj.vods[0].title,
            stream_audience: obj.audience,

        }
        // console.log(obj);
        dataResult.push(r);
    })

    // console.log(dataResult);
    return dataResult;
}

const insertRecords = function(table, data) {

    for (let i = 0; i < data.length; i++) {
        db.connection.query(`INSERT INTO ${table} SET ?`, data[i], (err, result, fields) => {
            if (err) {
                console.log('error=', err);
            }
        })
    }
}

// create objects 
var channelsObject = extractChannelIntoObject();
var redeemablesObject = createRedeemablesData();
insertRecords('Streams', channelsObject);
insertRecords('Redeemables', redeemablesObject);

