const db = require('../database/db-connection');

class Embers {
    constructor(tablename) {
        this.tablename = tablename;
    }

    getAll(callback) {

        db.query(`SELECT * FROM ${this.tablename}`, (error, streams) => {
            if (error) {
              console.log('Error - could not get embers ', error)
              return callback(error);
            }
            return callback(null, streams);
          });       
    }
}

module.exports = new Embers('Embers');