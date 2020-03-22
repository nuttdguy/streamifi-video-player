const db = require('../database/db-connection');

class Wallet {
    constructor(tablename) {
        this.tablename = tablename;
    }

    getOne(id, callback) {

        db.query(`SELECT * FROM ${this.tablename} WHERE wallet_id=${id}`, (error, wallet) => {
            if (error) {
              console.log('Error - could not get wallet ', error)
              return callback(error);
            }
            
            return callback(null, wallet);
          });       
    }
}

module.exports = new Wallet('Wallets');