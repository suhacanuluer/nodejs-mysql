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

    // sending table element call command with condition to mysql    
    var sql = "SELECT * from personal WHERE id >= 2";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        // console.log("Result: " + result);

          // printing the elements of the fetched table
        result.forEach(element => {
            console.log(element.ad + " " + element.soyad);
        });
    })
})