var mysql = require("mysql");

// connection information entry
var connection = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "Ass122...",
    database : "NodeJS"
});
// connection setup
connection.connect( err => {
    if (err) throw err;
    console.log("MySQL'e başarıyla bağlanıldı.")

    // sending creating command to mysql for new registry
    var sql = "INSERT INTO `NodeJS`.`personal` (`id`, `ad`, `soyad`, `email`) VALUES ('3', 'zeynep', 'altıparmak', 'zeynep123@gmail.com')"
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log("Kayıt başarıyla eklendi..")
    })
})