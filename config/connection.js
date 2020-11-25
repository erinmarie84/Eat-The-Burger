var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{ 
  connection = mysql.createConnection({
  host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "rxu30ebnasdsaa5fm",
  password: "mf84ctzmr2yu5qfx",
  database: "burger_db"
  });
}

connection.connect();

module.exports = connection;