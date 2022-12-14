
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root2311",
  database: "irctc_booking"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM Train_Schedule Join Food_Cost on Train_Schedule.Train_ID=Food_Cost.Train_ID where Train_Num='100165_CH'";
  var sql="select * from current_status";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});
});
