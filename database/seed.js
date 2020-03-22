const db = require('./db-connection.js');
const faker = require('faker');
const channeldata = require('./seed-data/channel-data.json');
const emberdata = require('./seed-data/ember-data.json');

const createTableSQL = `DROP DATABASE IF EXISTS streamifi;

CREATE DATABASE streamifi;

USE streamifi;

CREATE TABLE Streams (
    stream_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    token TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    audience VARCHAR(40) NOT NULL,
    subheading TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    viewers_total INT NOT NULL,
    viewers_current INT NOT NULL,
    url TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    created_at DATE NOT NULL
);


CREATE TABLE Redeemables (
    redeemables_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    img VARCHAR(64) NOT NULL,
    price INT NOT NULL,
    price_category VARCHAR(64),
    price_category_url VARCHAR(64) NOT NULL
);


CREATE TABLE Embers (
    ember_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(144) NOT NULL,
    alt VARCHAR(144) NOT NULL,
    offer_title VARCHAR(40) NOT NULL,
    amount VARCHAR(20) NOT NULL,
    offer_img_url VARCHAR(255) NOT NULL,
    promotion VARCHAR(40) NOT NULL,
    cost VARCHAR(20) NOT NULL
)`

// create stream objects
const createStreams = function() {
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
const createRedeemables = function() {

    const redeemables = [];
    let counter = 0;

    for (let i = 0; i <= 100; i++) {
        const redeemable = {};
        counter = counter === 50 ? 0 : counter + 1;

        // redeemable.img = '../dist/img/r'+counter+'.gif';
        redeemable.img = 'https://streamifi.s3-us-west-1.amazonaws.com/img/r'+counter+'.gif';
        redeemable.price = faker.commerce.price();
        redeemable.price_category = i % 2 === 0 ? 'Embers' : 'Sparks';
        redeemable.price_category_url = redeemable.price_category === 'Embers' ?
        'https://streamifi.s3-us-west-1.amazonaws.com/img/ember.png' : 
        'https://streamifi.s3-us-west-1.amazonaws.com/img/spark-coin.svg';

        redeemables.push(redeemable);

    }
    return redeemables;
}


const createEmbers = function() {
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


const createWallets = function() {
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


const createTable = function() {

    db.beginTransaction((error) => {
        if (error ) {
            return console.log("error", error)
        }

        db.query(createTableSQL, (err, result) => {
            if (err) {
                console.log('create table error', err);
                return;
            }

            db.commit(err => {
                if (err) {
                    console.log('commit error', err);
                    return;
                }

                console.log('Create database');
            })
        })
    })
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
    }

    console.log('Done inserting records=', data.length, 'into ', tableName);

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

