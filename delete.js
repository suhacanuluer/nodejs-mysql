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

    // sending deleting command to mysql
    var sql = "DELETE FROM personal WHERE id = 2";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result.affectedRows + " adet kayıt başarıyla silindi.")
    }) 
})