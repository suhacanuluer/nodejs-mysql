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

    // sending updating command to mysql for update registery
    var sql = "UPDATE personal SET email = 'selinsonmez111@gmail.com' WHERE id = 2";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        // console.log("Result: " + result);
        console.log(result.affectedRows + " kayıt güncellendi.")

        // result.forEach(element => {
        //     console.log(element.ad + " " + element.soyad);
        // });
    })
})