require('dotenv').config();

var db = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : process.env.DB_PASSWORD,
    database : 'node_test'
  }
});


const ret = db.raw('select now()').then((item) => {console.log(item[0])})