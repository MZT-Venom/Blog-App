const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "b5zcacbgfpubzqofbthz-mysql.services.clever-cloud.com",
  user: "uxcjydd1bjleb61n",
  password: "078G4TbG54tKaXqZpXLd",
  database: "b5zcacbgfpubzqofbthz",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = connection;
