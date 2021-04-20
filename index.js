const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "mysql",
  database: "nodeBD",
  password: "mysql"
})
// тестирование подключения
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // get all
 connection.query("SELECT * FROM user",
  function(err, results) {
    console.log(err);
    console.log(results); // собственно данные
})
  // закрытие подключения
  connection.end(function(err) {
    if (err) {
      return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
  });