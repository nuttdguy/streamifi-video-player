var mysql = require('mysql');
var CONFIG = require('./db.config.js');

var connection = mysql.createConnection(CONFIG);


connection.connect( () => {
  console.log('SQL server started ', connection.threadId );
});
  

class Redeemable {

  constructor(obj) {
    this.redeemables_id = obj.redeemables_id,
    this.redeemables_img = obj.redeemables_img,
    this.redeemables_price = obj.redeemables_price,
    this.redeemables_price_category = obj.redeemables_price_category
  }
}


const getModel = function(tableName, cb) {

  connection.query(`SELECT * FROM ${tableName}`, (err, data) => {
    if (err) {
      console.log('Error - could not get redeemables ', err)
      cb(err);
      return;
    }
    cb(null, data);
  });

}

connection.getModel = getModel;


module.exports.connection= connection;