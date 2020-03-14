const db = require('../database/db-connection');

class Redeemables {
    constructor(tablename) {
        this.tablename = tablename;
    }

    getAll(callback) {

        db.query(`SELECT * FROM ${this.tablename}`, (error, streams) => {
            if (error) {
              console.log('Error - could not get redeemables ', error)
              return callback(error);
            }
            return callback(null, streams);
          });  
    }
}

module.exports = new Redeemables('Redeemables');