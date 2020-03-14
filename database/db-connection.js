var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'Streamifi',
  charset: 'utf8mb4'
});


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


const get = function(tableName, cb) {

  connection.query(`SELECT * FROM ${tableName}`, (err, data) => {
    if (err) {
      console.log('Error - could not get redeemables ', err)
      cb(err);
      return;
    }
    cb(null, data);
  });

}

connection.getRedeemables = getRedeemables;


module.exports.connection= connection;