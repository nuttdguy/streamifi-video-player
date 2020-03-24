const mysql = require('mysql');
const config = require('./db.config.js');
const QUERY = require('./queries.js');
const faker = require('faker');
const channeldata = require('./seed-data/channel-data.json');
const emberdata = require('./seed-data/ember-data.json');


// create stream objects
const createStreams = function () {
    const streams = [];

    channeldata.forEach(obj => {
        let stream = {
            stream_id: obj.id,
            token: obj.token,
            title: obj.name,
            audience: obj.audience,
            subheading: 'Nothing to show ...',
            viewers_total: obj.viewersTotal,
            viewers_current: obj.viewersCurrent,
            url: `https://mixer.com/api/v1/channels/${obj.id}/manifest.m3u8?cdn=true`,
            created_at: new Date(obj.createdAt),
        }
        streams.push(stream);
    })

    return streams;
}

// create redeemable objects
const createRedeemables = function () {

    const redeemables = [];
    let counter = 0;

    for (let i = 0; i <= 100; i++) {
        const redeemable = {};
        counter = counter === 50 ? 0 : counter + 1;

        // redeemable.img = '../dist/img/r'+counter+'.gif';
        redeemable.img = 'https://streamifi.s3-us-west-1.amazonaws.com/img/r' + counter + '.gif';
        redeemable.price = faker.commerce.price();
        redeemable.price_category = i % 2 === 0 ? 'Embers' : 'Sparks';
        redeemable.price_category_url = redeemable.price_category === 'Embers' ?
            'https://streamifi.s3-us-west-1.amazonaws.com/img/ember.png' :
            'https://streamifi.s3-us-west-1.amazonaws.com/img/spark-coin.svg';

        redeemables.push(redeemable);

    }
    return redeemables;
}


const createEmbers = function () {
    const embers = [];
    emberdata.forEach(obj => {
        const ember = {
            label: obj.label,
            alt: obj.alt,
            offer_title: obj.offer_title,
            amount: obj.amount,
            offer_img_url: obj.offer_img_url,
            promotion: obj.promotion,
            cost: obj.cost
        };
        embers.push(ember);
    })
    return embers;
}


const createWallets = function () {
    const wallets = [];

    const generateBalance = function () {
        return Math.floor((Math.random() * 100) * 100)
    }


    const generateLevel = function () {
        return Math.floor(Math.random() * 100);
    }

    for (let i = 0; i <= 100; i++) {
        const sparkBalance = generateBalance();
        const emberBalance = generateBalance();
        const level = generateLevel();

        const wallet = {
            level: level,
            sparks_balance: sparkBalance,
            sparks_img_src: 'https://streamifi.s3-us-west-1.amazonaws.com/img/spark-coin.svg',
            embers_balance: emberBalance,
            embers_img_src: 'https://streamifi.s3-us-west-1.amazonaws.com/img/ember.png'
        }
        wallets.push(wallet);
    }
    return wallets;
}


const createTable = function (callback) {

    const db = mysql.createConnection({
        user: config.user,
        password: config.password,
        charset: 'utf8mb4'
    });

    db.connect((err) => {
        if (err) {
            return console.error('error: ' + err.message);
        }

        db.query(QUERY.DROP_STREAMIFI, (err) => {
            if (err) { return console.log('create db error', err); }
            db.query(QUERY.CREATE_STREAMIFI, (err) => {
                if (err) { return console.log('create db error', err); }
                db.query(QUERY.USE_STREAMIFI, (err) => {
                    if (err) { return console.log('create db error', err); }

                    db.query(QUERY.CREATE_STREAMS, (err) => {
                        if (err) { return console.log('Error creating Streams table', err); }
                        console.log('Done creating Streams Table');

                        db.query(QUERY.CREATE_REDEEMABLE, (err) => {
                            if (err) { return console.log('Error creating Redeemable table', err); }
                            console.log('Done creating Redeemable Table');

                            db.query(QUERY.CREATE_EMBERS, (err) => {
                                if (err) { return console.log('Error creating Embers table', err); }
                                console.log('Done creating Embers Table');

                                db.query(QUERY.CREATE_WALLETS, (err, result) => {
                                    if (err) { return console.log('Error creating Wallets table', err); }
                                    console.log('Done creating Wallets Table');

                                    db.end(err => {
                                        console.log('Done creating database => closing connection ');
                                        return callback(err);
                                    })

                                })
                            })
                        })
                    })
                });
            });
        });
    })

}


const addSeedRecords = function (callback) {


    const db = mysql.createConnection({
        user: config.user,
        password: config.password,
        database: config.database,
        charset: 'utf8mb4'
    }); 

    // insert seed data
    const insertRecords = function (tableName, data) {

        for (let i = 0; i < data.length; i++) {
            db.query(`INSERT INTO ${tableName} SET ?`, data[i], (err, result, fields) => {
                if (err) { return console.log('error=', err); }
            })
        }
        console.log('Done inserting records=', data.length, 'into ', tableName);

    }

    const seedRecordsintoTables = function(callback) {

        db.connect((err) => {
            if (err) {
                return console.error('error: ' + err);
            }

            // create objects
            var arrayOfStreamObjects = createStreams();
            var arrayOfredeemableObjects = createRedeemables();
            var arrayOfEmberObjects = createEmbers();
            var arrayOfWalletObjects = createWallets();
            insertRecords('Streams', arrayOfStreamObjects);
            insertRecords('Redeemables', arrayOfredeemableObjects);
            insertRecords('Embers', arrayOfEmberObjects);
            insertRecords('Wallets', arrayOfWalletObjects);
            callback(null, 'Done inserting records into tables');
        })
    }


    seedRecordsintoTables((err, message) => {
        db.end(err => {
            return callback(err, message);
        })
    })

};

createTable((err) => {
    if (err) { return console.error('error: ' + err); }

    addSeedRecords((err, message) => {
        if (err) { return console.error('error: ' + err); }
        console.log(`${message} and closing database connection`);
        process.exit(0);
    });
})